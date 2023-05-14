import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '@telegram-clone/shared';
import { AnyObject, ObjectSchema } from 'yup';
import { signUpSchema } from '@validation/index';

export const validateMiddleware = 
  (
    objectSchema: ObjectSchema<AnyObject>
  ) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const errors = await objectSchema.validate(req.body);

      if (errors) {
        return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).send(errors);
      }
      next();
    } catch (error) {
      return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ status: false });
    }
  }


validateMiddleware(signUpSchema)