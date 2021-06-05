"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const Router = express_1.default.Router();
exports.Router = Router;
Router.get('/', user_controller_1.userController.getMany);
Router.post('/', user_controller_1.userController.create);
Router.get('/:userId', user_controller_1.userController.getById);
Router.put('/:userId', user_controller_1.userController.updateOne);
Router.delete('/:userId', user_controller_1.userController.deleteOne);
