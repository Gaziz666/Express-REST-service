import { Request, Response, NextFunction } from 'express';
import { usersService } from './user.service';
import { User } from './user.model';

const userController = {
  getMany: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.method) {
        const users = await usersService.getMany();
        if (users) {
          res.status(200).json(users);
        }
      }
    } catch (err) {
      res.status(400);
      next(err);
    }
  },

  create: async (req: Request, res: Response) =>
    res
      .status(201)
      .json(
        await usersService.createUser(
          req.body.name,
          req.body.login,
          req.body.password
        )
      ),

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.params['userId']) return;
      const user = await usersService.getOne(req.params['userId']);
      if (!user) {
        res.status(400).json({});
        throw new Error('user not found');
      }
      res.status(200).json(User.toResponse(user as User));
    } catch (err) {
      next(err);
    }
  },

  updateOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.params['userId']) return;
      const user = await usersService.updateOne(req.params['userId'], req.body);
      if (!user) {
        res.status(404).json({});
        throw new Error(`user with id: ${req.params['userId']} not found`);
      }
      res.status(200).json(User.toResponse(user as User));
    } catch (err) {
      next(err);
    }
  },

  deleteOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.params['userId']) return;
      const result = await usersService.deleteOne(req.params['userId']);
      if (result) {
        res.status(204).json(result);
      } else {
        res.status(404).json(result);
        throw new Error('user not found');
      }
    } catch (err) {
      next(err);
    }
  },
};

export { userController };
