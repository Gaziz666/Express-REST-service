"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const user_service_1 = require("./user.service");
const user_model_1 = require("./user.model");
const userController = {
    getMany: async (req, res, next) => {
        try {
            if (req.method) {
                const users = await user_service_1.usersService.getMany();
                if (users) {
                    res.status(200).json(users);
                }
            }
        }
        catch (err) {
            res.status(400);
            next(err);
        }
    },
    create: async (req, res) => res
        .status(201)
        .json(await user_service_1.usersService.createUser(req.body.name, req.body.login, req.body.password)),
    getById: async (req, res, next) => {
        try {
            if (!req.params['userId'])
                return;
            const user = await user_service_1.usersService.getOne(req.params['userId']);
            if (!user) {
                throw http_errors_1.default(404, `user not found`);
            }
            res.status(200).json(user_model_1.User.toResponse(user));
        }
        catch (err) {
            next(err);
        }
    },
    updateOne: async (req, res, next) => {
        try {
            if (!req.params['userId'])
                return;
            const user = await user_service_1.usersService.updateOne(req.params['userId'], req.body);
            if (!user) {
                throw http_errors_1.default(404, `user not found`);
            }
            res.status(200).json(user_model_1.User.toResponse(user));
        }
        catch (err) {
            next(err);
        }
    },
    deleteOne: async (req, res, next) => {
        try {
            if (!req.params['userId'])
                return;
            const result = await user_service_1.usersService.deleteOne(req.params['userId']);
            if (result) {
                res.status(204).json(result);
            }
            else {
                throw http_errors_1.default(404, `user not found`);
            }
        }
        catch (err) {
            next(err);
        }
    },
};
exports.userController = userController;
