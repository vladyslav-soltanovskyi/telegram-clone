import { getEnv } from '@helpers/index';
import { PasswordChangeTokenPayload } from '@types-app/index';
import jwt from 'jsonwebtoken';

export const createPasswordChangeToken = (data: PasswordChangeTokenPayload): string =>
  jwt.sign(data, getEnv('JWT_SECRET_KEY'), {
    expiresIn: '1h',
  });