"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("./task.controller");
const Router = express_1.default.Router();
exports.Router = Router;
Router.get('/:boardId/tasks/', task_controller_1.taskController.getMany);
Router.post('/:boardId/tasks/', task_controller_1.taskController.create);
Router.get('/:boardId/tasks/:taskId', task_controller_1.taskController.getById);
Router.put('/:boardId/tasks/:taskId', task_controller_1.taskController.updateOne);
Router.delete('/:boardId/tasks/:taskId', task_controller_1.taskController.deleteOne);
