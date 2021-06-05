"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    console.log(req.body, req.params, res);
    next();
};
exports.logger = logger;
