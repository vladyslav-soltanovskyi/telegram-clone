import { TokenPayload } from './jwt';

export type { TokenPayload } from './jwt';

declare global {
  namespace Express {
    export interface Request {
      tokenPayload?: TokenPayload;
    }
  }
}