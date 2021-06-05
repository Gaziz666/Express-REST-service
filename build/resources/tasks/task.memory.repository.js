"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRepo = void 0;
const inMemoryDb_1 = require("../../common/inMemoryDb");
const task_model_1 = require("./task.model");
const taskRepo = {
    getMany: async (boardId) => {
        const result = await inMemoryDb_1.getMany(inMemoryDb_1.DbName.Tasks, (task) => task.boardId === boardId);
        if (result)
            return result;
        return [];
    },
    createTask: async (boardId, body) => {
        const { title, order, description, userId, columnId } = body;
        const newTask = await new task_model_1.Task({
            title,
            order,
            description,
            userId,
            boardId,
            columnId,
        });
        const result = await inMemoryDb_1.createOne(newTask, inMemoryDb_1.DbName.Tasks);
        if (result)
            return result;
        return undefined;
    },
    getById: async (boardId, taskId) => {
        const result = await inMemoryDb_1.findOne((task) => task.boardId === boardId && task.id === taskId, inMemoryDb_1.DbName.Tasks);
        return result;
    },
    updateOne: async (boardId, taskId, body) => {
        if (!body) {
            throw new Error();
        }
        const result = await inMemoryDb_1.update((task) => task.boardId === boardId && task.id === taskId, body, inMemoryDb_1.DbName.Tasks);
        return result;
    },
    deleteOne: async (boardId, taskId) => {
        const result = await inMemoryDb_1.destroy((task) => task.boardId === boardId && task.id === taskId, inMemoryDb_1.DbName.Tasks);
        return result;
    },
};
exports.taskRepo = taskRepo;
