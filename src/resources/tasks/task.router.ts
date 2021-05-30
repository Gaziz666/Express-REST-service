import Express from 'express';
import { taskController } from './task.controller';

const Router = Express.Router();

Router.get('/:boardId/tasks/', taskController.getMany);
Router.post('/:boardId/tasks/', taskController.create);
Router.get('/:boardId/tasks/:taskId', taskController.getById);
Router.put('/:boardId/tasks/:taskId', taskController.updateOne);
Router["delete"]('/:boardId/tasks/:taskId', taskController.deleteOne);

export { Router };
