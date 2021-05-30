"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const task_service_1 = require("./task.service");
const taskController = {
    getMany: async (req, res) => {
        if (!req.params['boardId'])
            return;
        const tasks = await task_service_1.taskService.getMany(req.params['boardId']);
        res.status(200).json(tasks);
    },
    create: async (req, res) => {
        if (!req.params['boardId'] || !req.body)
            return;
        res
            .status(201)
            .json(await task_service_1.taskService.createTask(req.params['boardId'], req.body));
    },
    getById: async (req, res) => {
        if (!req.params['boardId'] || !req.params['taskId'])
            return;
        const task = await task_service_1.taskService.getById(req.params['boardId'], req.params['taskId']);
        if (!task) {
            res.status(404).json({});
            return;
        }
        res.status(200).json(task);
    },
    updateOne: async (req, res) => {
        try {
            if (!req.params['boardId'] || !req.params['taskId'])
                return;
            const task = await task_service_1.taskService.updateOne(req.params['boardId'], req.params['taskId'], req.body);
            if (!task) {
                res.status(404).json({});
                return;
            }
            res.status(200).json(task);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    deleteOne: async (req, res) => {
        if (!req.params['boardId'] || !req.params['taskId'])
            return;
        const result = await task_service_1.taskService.deleteOne(req.params['boardId'], req.params['taskId']);
        if (result && result[0]) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json(result);
        }
    },
};
exports.taskController = taskController;
