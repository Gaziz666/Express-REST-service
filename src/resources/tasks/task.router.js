const Express = require('express');

const Router = Express.Router();
const taskController = require('./task.controller');

Router.get('/:boardId/tasks', taskController.getMany);
Router.post('/:boardId/tasks', taskController.create);
Router.get('/:boardId/tasks/:taskId', taskController.getOne);
Router.put('/:boardId/tasks/:taskId', taskController.updateOne);
Router.delete('/:boardId/tasks/:taskId', taskController.deleteOne);

module.exports = Router;
