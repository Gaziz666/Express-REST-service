import { Request, Response } from 'express';
import { usersService } from './user.service';
import { User } from './user.model';

const userController = {
  getMany: async (res: Response) => {
    const users = await usersService.getMany();
    res.status(200).json(users);
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

  getById: async (req: Request, res: Response) => {
    if (!req.params['userId']) return;
    const user = await usersService.getOne(req.params['userId']);
    if (!user) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(User.toResponse(user as User));
  },

  updateOne: async (req: Request, res: Response) => {
    if (!req.params['userId']) return;
    const user = await usersService.updateOne(req.params['userId'], req.body);
    if (!user) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(User.toResponse(user as User));
  },

  deleteOne: async (req: Request, res: Response) => {
    if (!req.params['userId']) return;
    const result = await usersService.deleteOne(req.params['userId']);
    if (result) {
      res.status(204).json(result);
    } else {
      res.status(404).json(result);
    }
  },
};

export { userController };
