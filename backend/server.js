import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userRouter } from './routes/usersRouter.js';

mongoose.set('strictQuery', true); //disables  deprecation warning

dotenv.config();

const app = express();
const port = 5173;
//const port = process.env.PORT || 5000;

app.use(cors(), express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log(`MongoDB connection established successfully`);
});

app.use('/users', userRouter);

app.listen(port, () => {
	console.log(
		`Server is running on port : ${port}, time: ${new Date().toLocaleTimeString()}`
	);
});
