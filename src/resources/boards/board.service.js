const boardRepo = require('./board.memory.repository');

const getMany = () => boardRepo.getMany();
const createBoard = (title, columns) => boardRepo.create(title, columns);
const getOne = (boardId) => boardRepo.getOne(boardId);
const updateOne = (boardId, body) => boardRepo.updateOne(boardId, body);
const deleteOne = (boardId) => boardRepo.deleteOne(boardId);

module.exports = { getMany, createBoard, getOne, updateOne, deleteOne };
