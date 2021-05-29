const taskRepo = require('./task.memory.repository');

const getMany = async (boardId) => {
  const result = await taskRepo.getMany(boardId);
  return result;
};
const createTask = async (boardIdParam, body) => {
  console.log(boardIdParam);
  const result = await taskRepo.createTask(boardIdParam, body);
  return result;
};

const getById = async (boardId, taskId) => {
  const result = await taskRepo.getById(boardId, taskId);
  return result;
};
const updateOne = async (boardIdParam, taskId, body) => {
  const result = await taskRepo.updateOne(boardIdParam, taskId, body);
  return result;
};
const deleteOne = async (boardId, taskId) => {
  const result = await taskRepo.deleteOne(boardId, taskId);
  return result;
};

module.exports = { getMany, createTask, getById, updateOne, deleteOne };
