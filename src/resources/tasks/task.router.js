const Express = require('express');

const Router = Express.Router();
const taskController = require('./task.controller');

Router.get('/', taskController.getMany)
Router.post('/', taskController.create)
Router.get('/:taskId', taskController.getOne)
Router.put('/:taskId', taskController.updateOne)
Router.delete('/:taskId', taskController.deleteOne)

module.exports = Router;
