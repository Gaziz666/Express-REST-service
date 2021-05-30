"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = void 0;
const task_memory_repository_1 = require("./task.memory.repository");
const getMany = async (boardId) => {
    const result = await task_memory_repository_1.taskRepo.getMany(boardId);
    return result;
};
const createTask = async (boardIdParam, body) => {
    const result = await task_memory_repository_1.taskRepo.createTask(boardIdParam, body);
    return result;
};
const getById = async (boardId, taskId) => {
    const result = await task_memory_repository_1.taskRepo.getById(boardId, taskId);
    return result;
};
const updateOne = async (boardIdParam, taskId, body) => {
    const result = await task_memory_repository_1.taskRepo.updateOne(boardIdParam, taskId, body);
    return result;
};
const deleteOne = async (boardId, taskId) => {
    const result = await task_memory_repository_1.taskRepo.deleteOne(boardId, taskId);
    return result;
};
const taskService = { getMany, createTask, getById, updateOne, deleteOne };
exports.taskService = taskService;
