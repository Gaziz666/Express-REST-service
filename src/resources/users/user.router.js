const Express = require('express');

const Router = Express.Router();
// const User = require('./user.model');
const usersController = require('./user.controller');

// Router.route('/').get(async (req, res) => {
//   const users = await usersService.getAll();
//   // map user fields to exclude secret fields like "password"
//   res.json(users.map(User.toResponse));
// });
Router.get('/', usersController.getMany)
Router.post('/', usersController.create)
Router.get('/:userId', usersController.getOne)
Router.put('/:userId', usersController.updateOne)
Router.delete('/:userId', usersController.deleteOne)

module.exports = Router;
