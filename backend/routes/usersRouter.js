import { Router } from 'express';
import { User } from '../models/user.model.js';

const userRouter = Router();

userRouter.route('/').get((req, res) => {
	console.log('hello');
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json('Error :' + err));
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
		.then(() => res.json('User added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

userRouter.route('/:username').get((req, res) => {
	User.find({ username: req.params.username })
		.then((user) => res.json(user))
		.catch((err) => res.status(400).json('Error : ' + err));
});

export { userRouter };
