"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardController = void 0;
const board_service_1 = require("./board.service");
const getMany = async (res) => {
    const boards = await board_service_1.boardService.getMany();
    res.status(200).json(boards);
};
const create = async (req, res) => res
    .status(201)
    .json(await board_service_1.boardService.createBoard(req.body.title, req.body.columns));
const getOne = async (req, res) => {
    if (!req.params['boardId'])
        return res.status(428);
    const board = await board_service_1.boardService.getOne(req.params['boardId']);
    if (!board) {
        return res.status(404).json({});
    }
    return res.status(200).json(board);
};
const updateOne = async (req, res) => {
    if (!req.params['boardId'])
        return res.status(428);
    const board = await board_service_1.boardService.updateOne(req.params['boardId'], req.body);
    if (!board) {
        return res.status(404).json({});
    }
    return res.status(200).json(board);
};
const deleteOne = async (req, res) => {
    if (!req.params['boardId'])
        return res.status(428);
    const result = await board_service_1.boardService.deleteOne(req.params['boardId']);
    if (result) {
        return res.status(204).json(result);
    }
    return res.status(404).json(result);
};
const boardController = { deleteOne, updateOne, getOne, create, getMany };
exports.boardController = boardController;
