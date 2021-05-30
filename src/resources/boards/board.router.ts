import Express from 'express';
import { boardController } from './board.controller';

const Router = Express.Router();

Router.get('/', boardController.getMany);
Router.post('/', boardController.create);
Router.get('/:boardId', boardController.getOne);
Router.put('/:boardId', boardController.updateOne);
Router["delete"]('/:boardId', boardController.deleteOne);

export { Router };
