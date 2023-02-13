import { Router } from 'express';
import User from '../../routes/models/user.model.js';

const userRouter = Router();

userRouter.route('/').get((req, res) => {
  console.log('Users Have Been Served');
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error :${err}`));
});
userRouter.route('/usernames').get((req, res) => {
  console.log('usernames has been served');
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error :${err}`));
});

userRouter.route('/:username').get((req, res) => {
  User.find({ username: req.params.username })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

userRouter.route('/add').post((req, res) => {
  const { username } = req.body;
  const { fullName } = req.body;
  const { password } = req.body;
  const { email } = req.body;
  const { birthDate } = req.body;

  const newUser = new User({
    username,
    fullName,
    password,
    email,
    birthDate,
  });
  newUser
    .save()
    .then(() => res.json('User added!'), console.log('A user Created'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

export default userRouter;
