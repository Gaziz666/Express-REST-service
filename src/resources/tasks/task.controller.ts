import { Request, Response } from 'express';
import { taskService } from './task.service';

const taskController = {
  getMany: async (req: Request, res: Response) => {
    if (!req.params['boardId']) return;
    const tasks = await taskService.getMany(req.params['boardId']);
    res.status(200).json(tasks);
  },

  create: async (req: Request, res: Response) => {
    if (!req.params['boardId'] || !req.body) return;
    res
      .status(201)
      .json(await taskService.createTask(req.params['boardId'], req.body));
  },
  getById: async (req: Request, res: Response) => {
    if (!req.params['boardId'] || !req.params['taskId']) return;
    const task = await taskService.getById(
      req.params['boardId'],
      req.params['taskId']
    );
    if (!task) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(task);
  },

  updateOne: async (req: Request, res: Response) => {
    try {
      if (!req.params['boardId'] || !req.params['taskId']) return;
      const task = await taskService.updateOne(
        req.params['boardId'],
        req.params['taskId'],
        req.body
      );
      if (!task) {
        res.status(404).json({});
        return;
      }
      res.status(200).json(task);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteOne: async (req: Request, res: Response) => {
    if (!req.params['boardId'] || !req.params['taskId']) return;
    const result = await taskService.deleteOne(
      req.params['boardId'],
      req.params['taskId']
    );

    if (result && result[0]) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  },
};

export { taskController };
