"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const board_controller_1 = require("./board.controller");
const Router = express_1.default.Router();
exports.Router = Router;
Router.get('/', board_controller_1.boardController.getMany);
Router.post('/', board_controller_1.boardController.create);
Router.get('/:boardId', board_controller_1.boardController.getOne);
Router.put('/:boardId', board_controller_1.boardController.updateOne);
Router["delete"]('/:boardId', board_controller_1.boardController.deleteOne);
