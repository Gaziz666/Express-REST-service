"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const user_model_1 = require("./user.model");
const userController = {
    getMany: async (req, res) => {
        if (req.method) {
            const users = await user_service_1.usersService.getMany();
            if (users) {
                res.status(200).json(users);
            }
        }
    },
    create: async (req, res) => res
        .status(201)
        .json(await user_service_1.usersService.createUser(req.body.name, req.body.login, req.body.password)),
    getById: async (req, res) => {
        if (!req.params['userId'])
            return;
        const user = await user_service_1.usersService.getOne(req.params['userId']);
        if (!user) {
            res.status(404).json({});
            return;
        }
        res.status(200).json(user_model_1.User.toResponse(user));
    },
    updateOne: async (req, res) => {
        if (!req.params['userId'])
            return;
        const user = await user_service_1.usersService.updateOne(req.params['userId'], req.body);
        if (!user) {
            res.status(404).json({});
            return;
        }
        res.status(200).json(user_model_1.User.toResponse(user));
    },
    deleteOne: async (req, res) => {
        if (!req.params['userId'])
            return;
        const result = await user_service_1.usersService.deleteOne(req.params['userId']);
        if (result) {
            res.status(204).json(result);
        }
        else {
            res.status(404).json(result);
        }
    },
};
exports.userController = userController;
