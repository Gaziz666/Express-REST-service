"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unhandledRejectionLogger = exports.uncaughtExceptionLogger = exports.errorLogger = exports.logger = void 0;
const fs_1 = __importDefault(require("fs"));
const logger = (req, res, next) => {
    const ws = fs_1.default.createWriteStream(`logs/log.txt`, {
        flags: 'a',
    });
    const date = new Date();
    ws.write(`${date}, url: ${req.url}, body: ${JSON.stringify(req.body)}, query params: ${JSON.stringify(req.params)}, statusCode: ${res.statusCode}\n`);
    ws.close();
    next();
};
exports.logger = logger;
const errorLogger = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ message: error.message });
    req.method;
    const ws = fs_1.default.createWriteStream(`logs/errorLog.txt`, {
        flags: 'a',
    });
    const date = new Date();
    ws.write(`${date}, errorStatus: ${error.status}, message: ${error.message}\n`);
    ws.close();
    next();
};
exports.errorLogger = errorLogger;
const uncaughtExceptionLogger = (err) => {
    const ws = fs_1.default.createWriteStream(`logs/errorLog.txt`, {
        flags: 'a',
    });
    const date = new Date();
    ws.write(`${date}, uncaughtExceptionError: ${err}\n`);
    ws.close();
};
exports.uncaughtExceptionLogger = uncaughtExceptionLogger;
const unhandledRejectionLogger = (p) => {
    const ws = fs_1.default.createWriteStream(`logs/errorLog.txt`, {
        flags: 'a',
    });
    const date = new Date();
    ws.write(`${date}, uncaughtExceptionError: ${JSON.stringify(p)}\n`);
    ws.close();
};
exports.unhandledRejectionLogger = unhandledRejectionLogger;
