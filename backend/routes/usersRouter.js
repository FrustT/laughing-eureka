import { Router } from 'express';
import { redirect } from 'react-router-dom';
import { User } from '../models/user.model.js';

const userRouter = Router();

userRouter.route('/').get((req, res) => {
	console.log('Users Have Been Served');
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json('Error :' + err));
	});
userRouter.route('/usernames').get((req,res)=>{
	console.log('usernames has been served');
	User.find()
	.then((users)=>res.json(users))
	.catch((err)=> res.status(400).json('Error :'+err));
	});

userRouter.route('/:username').get((req, res) => {
	User.find({ username: req.params.username })
		.then((user) => res.json(user))
		.catch((err) => res.status(400).json('Error : ' + err));
});
	
userRouter.route('/add').post((req, res) => {
	const username = req.body.username;
	const fullName = req.body.fullName;
	const password = req.body.password;
	const email = req.body.email;
	const birthDate = req.body.birthDate;

	const newUser = new User({
		username,
		fullName,
		password,
		email,
		birthDate,
	});
		newUser
			.save()
			.then(
				() => res.json('User added!'),
				console.log('A user Created'),
				res.redirect('login')
			)
			.catch((err) => res.status(400).json('Error: ' + err));
	});


export { userRouter };
