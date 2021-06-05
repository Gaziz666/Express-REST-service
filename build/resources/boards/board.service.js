"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardService = void 0;
const board_memory_repository_1 = require("./board.memory.repository");
const getMany = async () => {
    const result = await board_memory_repository_1.boardRepo.getMany();
    return result;
};
const createBoard = async (title, columns) => {
    const result = board_memory_repository_1.boardRepo.create(title, columns);
    return result;
};
const getOne = async (boardId) => {
    const result = board_memory_repository_1.boardRepo.getOne(boardId);
    return result;
};
const updateOne = async (boardId, body) => {
    const result = await board_memory_repository_1.boardRepo.updateOne(boardId, body);
    return result;
};
const deleteOne = async (boardId) => {
    const result = await board_memory_repository_1.boardRepo.deleteOne(boardId);
    return result;
};
const boardService = { getMany, createBoard, getOne, updateOne, deleteOne };
exports.boardService = boardService;
