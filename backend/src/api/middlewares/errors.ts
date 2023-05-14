import type { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '@telegram-clone/shared';
import { loggerService, lang } from '@helpers/index';
import { HttpError } from '@errors/index';

export const errorsHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response<any, Record<string, any>> => {
  if (!err) {
    next();
  }

  if (err instanceof HttpError) {
    const { method, url } = req;
    const errorResponse = {
      path: url,
      method: method,
      statusCode: err.status,
      message: err.message,
    };

    loggerService.error(errorResponse);

    return res.status(err.status).json({
      message: err.message,
    });
  }

  loggerService.error(err.message);

  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    message: lang('translation:INTERNAL_ERROR')
  });
};
