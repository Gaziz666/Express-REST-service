import { Request, Response } from 'express';

import { boardService } from './board.service';

const getMany = async (req: Request, res: Response) => {
  if (req.method) {
    const boards = await boardService.getMany();
    if (boards) {
      res.status(200).json(boards);
    }
  }
};

const create = async (req: Request, res: Response) =>
  res
    .status(201)
    .json(await boardService.createBoard(req.body.title, req.body.columns));

const getOne = async (req: Request, res: Response) => {
  if (!req.params['boardId']) return res.status(428);
  const board = await boardService.getOne(req.params['boardId']);
  if (!board) {
    return res.status(404).json({});
  }
  return res.status(200).json(board);
};

const updateOne = async (req: Request, res: Response) => {
  if (!req.params['boardId']) return res.status(428);
  const board = await boardService.updateOne(req.params['boardId'], req.body);
  if (!board) {
    return res.status(404).json({});
  }
  return res.status(200).json(board);
};

const deleteOne = async (req: Request, res: Response) => {
  if (!req.params['boardId']) return res.status(428);
  const result = await boardService.deleteOne(req.params['boardId']);
  if (result) {
    return res.status(204).json(result);
  }
  return res.status(404).json(result);
};

const boardController = { deleteOne, updateOne, getOne, create, getMany };
export { boardController };
