import { AuthObject } from '@fingoafrica/common';

declare global {
  namespace Express {
    export interface Request {
      auth: AuthObject;
    }
  }
}
