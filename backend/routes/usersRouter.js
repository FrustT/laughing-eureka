import { Router } from 'express';
import { User } from '../models/user.model.js';

const userRouter = Router();

userRouter.route('/').get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json('Error :' + err));
});

userRouter.route('/add').post((req, res) => {
	const username = req.body.username;
	const fullName = req.body.fullName;
	const password = req.body.password;
	const email = req.body.email;
	const birthDate = Date.parse(req.body.birthDate);

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

export { userRouter };
