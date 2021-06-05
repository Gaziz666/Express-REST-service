import { Request, NextFunction, Response } from 'express';
import { saveLogsToFile } from './writeStream';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log(req.query, res.locals);
  saveLogsToFile(req.url, req.body, req.query);
  next();
};

export { logger };
