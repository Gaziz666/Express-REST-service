// const express = require('express');
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { Request, Response, NextFunction } from 'express';
import { Router as userRouter } from './resources/users/user.router';
import { Router as boardRouter } from './resources/boards/board.router';
import { Router as taskRouter } from './resources/tasks/task.router';
import {
  errorLogger,
  logger,
  uncaughtExceptionLogger,
  unhandledRejectionLogger,
} from './logger/logger';

type ErrorHandlerType = {
  message: string;
  status: number;
};

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use((req, res, next) => logger(req, res, next));

app.use('/users', userRouter);
app.use('/boards', taskRouter);
app.use('/boards', boardRouter);
app.use(
  (err: ErrorHandlerType, req: Request, res: Response, next: NextFunction) =>
    errorLogger(err, req, res, next)
);

process.on('uncaughtException', (err) => {
  uncaughtExceptionLogger(err);
});
process.on('unhandledRejection', (_reason, p) => {
  unhandledRejectionLogger(p);
});

export { app };
