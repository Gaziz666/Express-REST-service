"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = __importDefault(require("uuid"));
class Board {
    constructor({ id = uuid_1.default.v4(), title = 'Autotest board', columns = [
        {
            id: uuid_1.default.v4(),
            title: 'Backlog',
            order: 1,
        },
        {
            id: uuid_1.default.v4(),
            title: 'Sprint',
            order: 2,
        },
    ], } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
}
exports.Board = Board;
