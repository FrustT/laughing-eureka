import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  dbUrl: process.env.ATLAS_URI,
};

export default appConfig;
