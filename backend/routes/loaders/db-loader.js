import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.ATLAS_URI;

export default (url = uri, opts = {}) => {
  const dbOptions = { ...opts, useNewUrlParser: true, useUnifiedTopology: true };
  mongoose.set('strictQuery', true); // disables  deprecation warning
  mongoose.connect(url, dbOptions);
  const { connection } = mongoose;
  return connection;
};
