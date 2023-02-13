import { isCelebrateError } from 'celebrate';
import ErrorResponse from './error_response.js';

const errorHandler = (err, req, res, next) => {
  console.log(err);
  let error = { ...err };
  error.message = err.message;

  // celebrate error
  if (isCelebrateError(err)) {
    if (!err) {
      error = new ErrorResponse('Unable to process request, try again', 400);
    } else {
      const errorBody = err.details.get('body');
      if (errorBody) {
        const {
          details: [errorDetails],
        } = errorBody;
        console.log(errorDetails);
        const { message } = errorDetails;
        error = new ErrorResponse(message, 400);
      } else {
        error = new ErrorResponse('Invalid payload sent, review and try again', 400);
      }
    }
  }

  // mongoose duplicate error
  if (err.code === 11000) {
    const message = 'Field already exists or duplicate value encountered';
    error = new ErrorResponse(message, 400);
  }

  // mongoose validation error
  if (err.name === 'CastError') {
    const message = 'Invalid parameter passed';
    error = new ErrorResponse(message, 400);
  }

  // mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.status || 500).json({
    status: false,
    message: error.message || 'Server error! request not completed',
    data: {},
  });
};

export default errorHandler;
