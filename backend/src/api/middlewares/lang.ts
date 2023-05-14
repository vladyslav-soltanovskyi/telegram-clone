import type { NextFunction, Request, Response } from 'express';
import { HttpHeader, DEFAULT_LOCALE } from '@telegram-clone/shared';
import { langService } from '@helpers/lang';

export const langMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const locale = req.headers[HttpHeader.ACCEPT_LANGUAGE] ?? DEFAULT_LOCALE;
  langService.setLocale(<string>locale);

  next();
};
