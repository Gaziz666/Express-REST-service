import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { taskService } from './task.service';

const taskController = {
  getMany: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.params['boardId']) return;
      const tasks = await taskService.getMany(req.params['boardId']);
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.params['boardId'] || !req.body) return;
      res
        .status(201)
        .json(await taskService.createTask(req.params['boardId'], req.body));
    } catch (err) {
      next(err);
    }
  },
  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.params['boardId'] || !req.params['taskId']) return;
      const task = await taskService.getById(
        req.params['boardId'],
        req.params['taskId']
      );
      if (!task) {
        throw createError(404, `task not found`);
      }
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  },

  updateOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.params['boardId'] || !req.params['taskId']) return;
      const task = await taskService.updateOne(
        req.params['boardId'],
        req.params['taskId'],
        req.body
      );
      if (!task) {
        throw createError(404, `task not found`);
      }
      res.status(200).json(task);
    } catch (err) {
      res.status(500).json(err);
      next(err);
    }
  },

  deleteOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.params['boardId'] || !req.params['taskId']) return;
      const result = await taskService.deleteOne(
        req.params['boardId'],
        req.params['taskId']
      );

      if (result && result[0]) {
        res.status(200).json(result);
      } else {
        throw createError(404, `task not found`);
      }
    } catch (err) {
      next(err);
    }
  },
};

export { taskController };
