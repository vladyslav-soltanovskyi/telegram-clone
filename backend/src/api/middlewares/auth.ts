import type { NextFunction, Request, Response } from 'express';
import { HttpHeader, HttpStatusCode } from '@telegram-clone/shared';
import { verify as jwtVerify } from 'jsonwebtoken';
import { getEnv, lang } from '@helpers/index';
import type { TokenPayload } from '@types-app/index';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.header(HttpHeader.AUTHORIZATION);

  if (!authHeader) {
    return res.status(HttpStatusCode.UNAUTHORIZED).json({
      message: lang('translation:UNAUTHORIZED'),
    });
  }
  const tokenValue = authHeader.replace('Bearer', '').trim();
  try {
    const tokenPayload: TokenPayload = <TokenPayload>(
      jwtVerify(tokenValue, getEnv('JWT_SECRET_KEY'))
    );
    req.tokenPayload = tokenPayload;
  } catch (e) {
    return res.status(HttpStatusCode.UNAUTHORIZED).json({
      message: lang('translation:UNAUTHORIZED'),
    });
  }

  next();
};
