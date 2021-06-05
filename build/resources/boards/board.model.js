"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid = require("uuid");
class Board {
    constructor({ id = uuid.v4(), title = 'Autotest board', columns = [
        {
            id: uuid.v4(),
            title: 'Backlog',
            order: 1,
        },
        {
            id: uuid.v4(),
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
