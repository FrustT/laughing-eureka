import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userRouter } from './routes/usersRouter.js';

mongoose.set('strictQuery', true); //disables  deprecation warning

dotenv.config();

const app = express();
const port = 3000;
//const port = process.env.PORT || 5000;

app.use(cors({
	origin:'http://localhost:5173',
	credentials:true,
	allowedHeaders: ['Content-Type', 'Authorization']	
}));
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.ip + ': ' + req.method + ' ' + req.originalUrl, req.body);
	next();
});

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log(`MongoDB connection established successfully`);
});

app.use('/api/v1/users', userRouter);
//app.use('*',(req,res)=>res.status(404).json({error: "Unsupported Route"}));

app.listen(port, () => {
	console.log(
		`Server is running on port : ${port}, time: ${new Date().toLocaleTimeString()}`
	);
});
