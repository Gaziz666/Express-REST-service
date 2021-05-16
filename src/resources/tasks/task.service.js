const taskRepo = require('./task.memory.repository');

const getMany = (boardId) => taskRepo.getMany(boardId);
const createTask = (
  boardIdParam,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) =>
  taskRepo.createTask(
    boardIdParam,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  );

const getOne = (boardId, taskId) => taskRepo.getOne(boardId, taskId);
const updateOne = (
  boardIdParam,
  taskId,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) =>
  taskRepo.updateOne(
    boardIdParam,
    taskId,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  );
const deleteOne = (boardId, taskId) => taskRepo.deleteOne(boardId, taskId);

module.exports = { getMany, createTask, getOne, updateOne, deleteOne };
