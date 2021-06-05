"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// const express = require('express');
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const path_1 = __importDefault(require("path"));
const yamljs_1 = __importDefault(require("yamljs"));
const user_router_1 = require("./resources/users/user.router");
const board_router_1 = require("./resources/boards/board.router");
const task_router_1 = require("./resources/tasks/task.router");
const logger_1 = require("./logger/logger");
const app = express_1.default();
exports.app = app;
const swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, '../doc/api.yaml'));
app.use(express_1.default.json());
app.use('/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use((req, res, next) => logger_1.logger(req, res, next));
app.use('/users', user_router_1.Router);
app.use('/boards', task_router_1.Router);
app.use('/boards', board_router_1.Router);
app.use((err, req, res, next) => logger_1.errorLogger(err, req, res, next));
process.on('uncaughtException', (err) => {
    logger_1.uncaughtExceptionLogger(err);
});
process.on('unhandledRejection', (_reason, p) => {
    logger_1.unhandledRejectionLogger(p);
});
Promise.reject(Error('Oops!'));
