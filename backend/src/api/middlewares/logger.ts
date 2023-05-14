import type { NextFunction, Request, Response } from 'express';
import { loggerService } from '@helpers/index';

export const loggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const headers = req.headers ?? {};
  const query = req.query ?? {};
  const body = req.body ?? {};
  const { method, path } = req;

  loggerService.log({
    query: query,
    body: body,
    headers: headers,
    path: path,
    method: method,
    message: `METHOD: ${method}; PATH: ${path}`,
  });

  next();
};
