import { getEnv } from '@helpers/index';
import { EmailTokenPayload } from '@types-app/index';
import jwt from 'jsonwebtoken';

export const createEmailToken = (data: EmailTokenPayload): string =>
  jwt.sign(data, getEnv('JWT_SECRET_KEY'), {
    expiresIn: '7d',
  });