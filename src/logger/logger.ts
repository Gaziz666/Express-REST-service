import { Request, NextFunction, Response } from 'express';
import fs from 'fs';

type ErrorHandlerType = {
  message: string;
};

export const logger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const ws = fs.createWriteStream(`logs/log.txt`, {
    flags: 'a',
  });
  const date = new Date();

  ws.write(
    `${date}, url: ${req.url}, body: ${JSON.stringify(
      req.body
    )}, query params: ${JSON.stringify(req.params)}, statusCode: ${
      res.statusCode
    }\n`
  );
  ws.close();
  next();
};

export const errorLogger = (
  error: ErrorHandlerType,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log('error logger');
  req.method;
  const ws = fs.createWriteStream(`logs/errorLog.txt`, {
    flags: 'a',
  });
  const date = new Date();

  ws.write(
    `${date}, errorStatus: ${res.statusCode}, message: ${error.message}\n`
  );
  ws.close();
  next();
};
