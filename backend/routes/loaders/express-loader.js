import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import helmet from 'helmet';
import xss from 'xss-clean';
import options from '../config/index.js';

import apiRoutes from '../../api/routes/usersRouter.js';
import errorHandler from '../utils/error_handler.js';
import ErrorResponse from '../utils/error_response.js';

const apiLimiter = rateLimit({
  windowMs: 20 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next) =>
    res.status(429).json({
      status: false,
      message: 'Too many requests, please try again later.',
    }),
});

export default ({ app, express }) => {
  app.disable('x-powered-by'); // To hide application's information
  app.enable('trust proxy');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(options.corsConfig));
  app.use(mongoSanitize());
  app.use(helmet());

  app.use(xss());
  app.get('/ip', (req, res) => res.send(req.ip));
  app.use('/api/v1', apiLimiter, apiRoutes);

  app.use(errorHandler);

  app.use('*', (req, res, next) => next(new ErrorResponse('Route not found', 404)));

  return app;
};
