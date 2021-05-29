const boardService = require('./board.service');

module.exports = {
  getMany: async (req, res) => {
    const boards = await boardService.getMany();
    res.status(200).json(boards);
  },

  create: async (req, res) =>
    res
      .status(201)
      .json(await boardService.createBoard(req.body.title, req.body.columns)),

  getOne: async (req, res) => {
    const board = await boardService.getOne(req.params.boardId);
    if (!board) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(board);
  },

  updateOne: async (req, res) => {
    const board = await boardService.updateOne(req.params.boardId, req.body);
    if (!board) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(board);
  },

  deleteOne: async (req, res) => {
    const result = await boardService.deleteOne(req.params.boardId);
    if (result) {
      res.status(204).json(result);
    } else {
      res.status(404).json(result);
    }
  },
};
