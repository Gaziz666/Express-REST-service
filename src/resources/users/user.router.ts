import Express from 'express';

import { userController } from './user.controller';

const Router = Express.Router();

Router.get('/', userController.getMany);
Router.post('/', userController.create);
Router.get('/:userId', userController.getById);
Router.put('/:userId', userController.updateOne);
Router.delete('/:userId', userController.deleteOne);

export { Router };
