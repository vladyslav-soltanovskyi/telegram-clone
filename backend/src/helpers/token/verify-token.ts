import { getEnv } from '@helpers/index';
import jwt, { JwtPayload } from 'jsonwebtoken';

const verifyToken = <P extends JwtPayload>(token: string): P => <P>(
  jwt.verify(token, getEnv('JWT_SECRET_KEY'))
);

export { verifyToken };
