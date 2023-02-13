import dbConnect from './db-loader.js';
import expressLoader from './express-loader.js';

export default async ({ app, express }) => {
  const connection = dbConnect();
  if (connection) console.log('MongoDB connection has been established');

  expressLoader({ app, express });
  if (expressLoader) console.log('Express middlewares have been Initialized');
};
