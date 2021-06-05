import { Request, Response, NextFunction } from 'express';

import { boardService } from './board.service';

const getMany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.method) {
      const boards = await boardService.getMany();
      if (boards) {
        res.status(200).json(boards);
      }
    }
  } catch (err) {
    next(err);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res
      .status(201)
      .json(await boardService.createBoard(req.body.title, req.body.columns));
  } catch (err) {
    next(err);
  }
};

const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.params['boardId']) return;
    const board = await boardService.getOne(req.params['boardId']);
    if (!board) {
      res.status(404).json({});
      throw new Error('not found');
    }
    res.status(200).json(board);
  } catch (err) {
    next(err);
  }
};

const updateOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.params['boardId']) return;
    const board = await boardService.updateOne(req.params['boardId'], req.body);
    if (!board) {
      res.status(404).json({});
      throw new Error('not found');
    }
    res.status(200).json(board);
  } catch (err) {
    next(err);
  }
};

const deleteOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.params['boardId']) return;
    const result = await boardService.deleteOne(req.params['boardId']);
    if (result) {
      res.status(204).json(result);
    }
    res.status(404).json(result);
    throw new Error('not found');
  } catch (err) {
    next(err);
  }
};

const boardController = { deleteOne, updateOne, getOne, create, getMany };

export { boardController };
