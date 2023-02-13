import express from 'express';
import dotenv from 'dotenv';
import appConfig from './routes/config/index.js';
import appLoader from './routes/loaders/index.js';

dotenv.config();

export const app = express();

export const start = async () => {
  try {
    await appLoader({ app, express });
    app.listen(appConfig.port, () => {
      console.log(
        `Server is running on port : ${appConfig.port}, time: ${new Date().toLocaleTimeString()}`
      );
    });
  } catch (e) {
    console.error(e);
  }
};
