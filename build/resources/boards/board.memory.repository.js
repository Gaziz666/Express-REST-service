"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRepo = void 0;
const inMemoryDb_1 = require("../../common/inMemoryDb");
const board_model_1 = require("./board.model");
const boardRepo = {
    getMany: async () => {
        const Boards = await inMemoryDb_1.getMany(inMemoryDb_1.DbName.Boards);
        return Boards;
    },
    create: async (title, columns) => {
        const board = new board_model_1.Board({ title, columns });
        const result = await inMemoryDb_1.createOne(board, inMemoryDb_1.DbName.Boards);
        return result;
    },
    getOne: async (boardId) => {
        const result = await inMemoryDb_1.findOne((board) => board.id === boardId, inMemoryDb_1.DbName.Boards);
        return result;
    },
    updateOne: async (boardId, body) => {
        const result = await inMemoryDb_1.update((board) => board.id === boardId, body, inMemoryDb_1.DbName.Boards);
        return result;
    },
    deleteOne: async (boardId) => {
        const deletedBoards = await inMemoryDb_1.destroy((board) => board.id === boardId, inMemoryDb_1.DbName.Boards);
        await inMemoryDb_1.destroyMany((task) => task.boardId !== deletedBoards[0]?.id, inMemoryDb_1.DbName.Tasks);
        return deletedBoards[0];
    },
};
exports.boardRepo = boardRepo;
