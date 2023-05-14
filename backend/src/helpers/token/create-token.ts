import { getEnv } from '@helpers/index';
import { TokenPayload } from '@types-app/index';
import jwt from 'jsonwebtoken';

export const createToken = (data: TokenPayload, isAcceessToken = true): string =>
  jwt.sign(data, getEnv('JWT_SECRET_KEY'), {
    expiresIn: isAcceessToken
      ? getEnv('JWT_ACCESS_TOKEN_EXPIRATION_TIME')
      : getEnv('REFRESH_TOKEN_EXPIRATION_TIME'),
  });