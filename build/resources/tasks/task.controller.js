"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const task_service_1 = require("./task.service");
const taskController = {
    getMany: async (req, res, next) => {
        try {
            if (!req.params['boardId'])
                return;
            const tasks = await task_service_1.taskService.getMany(req.params['boardId']);
            res.status(200).json(tasks);
        }
        catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            if (!req.params['boardId'] || !req.body)
                return;
            res
                .status(201)
                .json(await task_service_1.taskService.createTask(req.params['boardId'], req.body));
        }
        catch (err) {
            next(err);
        }
    },
    getById: async (req, res, next) => {
        try {
            if (!req.params['boardId'] || !req.params['taskId'])
                return;
            const task = await task_service_1.taskService.getById(req.params['boardId'], req.params['taskId']);
            if (!task) {
                throw http_errors_1.default(404, `task not found`);
            }
            res.status(200).json(task);
        }
        catch (err) {
            next(err);
        }
    },
    updateOne: async (req, res, next) => {
        try {
            if (!req.params['boardId'] || !req.params['taskId'])
                return;
            const task = await task_service_1.taskService.updateOne(req.params['boardId'], req.params['taskId'], req.body);
            if (!task) {
                throw http_errors_1.default(404, `task not found`);
            }
            res.status(200).json(task);
        }
        catch (err) {
            res.status(500).json(err);
            next(err);
        }
    },
    deleteOne: async (req, res, next) => {
        try {
            if (!req.params['boardId'] || !req.params['taskId'])
                return;
            const result = await task_service_1.taskService.deleteOne(req.params['boardId'], req.params['taskId']);
            if (result && result[0]) {
                res.status(200).json(result);
            }
            else {
                throw http_errors_1.default(404, `task not found`);
            }
        }
        catch (err) {
            next(err);
        }
    },
};
exports.taskController = taskController;
