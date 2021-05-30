"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = __importDefault(require("uuid"));
class Task {
    constructor({ title = 'Autotest task', order = 0, description = 'Lorem ipsum', userId = '', boardId = '', columnId = '', } = {}) {
        this.id = uuid_1.default.v4();
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
exports.Task = Task;
