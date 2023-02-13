import corsOptions from './cors.config.js';

import appConfig from './app.config.js';

const port = process.env.PORT || 3000;

const baseConfig = {
  port,
  appConfig,
  corsOptions,
};

export default baseConfig;
