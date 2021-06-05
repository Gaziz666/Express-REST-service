"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardController = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const board_service_1 = require("./board.service");
const getMany = async (req, res, next) => {
    try {
        if (req.method) {
            const boards = await board_service_1.boardService.getMany();
            if (boards) {
                res.status(200).json(boards);
            }
        }
    }
    catch (err) {
        next(err);
    }
};
const create = async (req, res, next) => {
    try {
        res
            .status(201)
            .json(await board_service_1.boardService.createBoard(req.body.title, req.body.columns));
    }
    catch (err) {
        next(err);
    }
};
const getOne = async (req, res, next) => {
    try {
        if (!req.params['boardId'])
            return;
        const board = await board_service_1.boardService.getOne(req.params['boardId']);
        if (!board) {
            throw http_errors_1.default(404, `not found`);
        }
        res.status(200).json(board);
    }
    catch (err) {
        next(err);
    }
};
const updateOne = async (req, res, next) => {
    try {
        if (!req.params['boardId'])
            return;
        const board = await board_service_1.boardService.updateOne(req.params['boardId'], req.body);
        if (!board) {
            throw http_errors_1.default(404, `not found`);
        }
        res.status(200).json(board);
    }
    catch (err) {
        next(err);
    }
};
const deleteOne = async (req, res, next) => {
    try {
        if (!req.params['boardId'])
            return;
        const result = await board_service_1.boardService.deleteOne(req.params['boardId']);
        if (result) {
            res.status(204).json(result);
        }
        throw http_errors_1.default(404, `not found`);
    }
    catch (err) {
        next(err);
    }
};
const boardController = { deleteOne, updateOne, getOne, create, getMany };
exports.boardController = boardController;
