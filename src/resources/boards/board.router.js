const Express = require('express');

const Router = Express.Router();
const boardController = require('./board.controller');

Router.get('/', boardController.getMany)
Router.post('/', boardController.create)
Router.get('/:boardId', boardController.getOne)
Router.put('/:boardId', boardController.updateOne)
Router.delete('/:boardId', boardController.deleteOne)

module.exports = Router;
