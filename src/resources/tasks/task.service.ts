import { taskRepo } from './task.memory.repository';

const getMany = async (boardId: string) => {
  const result = await taskRepo.getMany(boardId);
  return result;
};
const createTask = async (
  boardIdParam: string,
  body: {
    title: string;
    order: number;
    description: string;
    userId: string;
    columnId: string;
  }
) => {
  const result = await taskRepo.createTask(boardIdParam, body);
  return result;
};

const getById = async (boardId: string, taskId: string) => {
  const result = await taskRepo.getById(boardId, taskId);
  return result;
};
const updateOne = async (
  boardIdParam: string,
  taskId: string,
  body: { [key: string]: string | number }
) => {
  const result = await taskRepo.updateOne(boardIdParam, taskId, body);
  return result;
};
const deleteOne = async (boardId: string, taskId: string) => {
  const result = await taskRepo.deleteOne(boardId, taskId);
  return result;
};

const taskService = { getMany, createTask, getById, updateOne, deleteOne };
export { taskService };
