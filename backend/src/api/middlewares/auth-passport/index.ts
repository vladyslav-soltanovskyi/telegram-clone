import { Prisma, User } from '@prisma/client';
import { prismaClient } from '@config/db';
import { initializeStrategies } from './strategies';
import { signUpSchema } from '@validation/index';
import passport from 'passport';
import {
  SignInRequestData,
  TypedRequestBody,
  TypedRequestQuery,
} from '@types-app/index';
import type { NextFunction, Response } from 'express';
import { HttpStatusCode } from '@telegram-clone/shared';
import { UserAlreadyExistsError } from '@errors/user';

initializeStrategies();

const localAuth = (
  req: TypedRequestBody<SignInRequestData>,
  res: Response,
  next: NextFunction,
): void => {
  passport.authenticate(
    'local',
    {
      session: false,
      failureRedirect: '/',
    },
    (err, user, info) => {
      if (err) {
        next(err);
      }
      if (!user) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json(info);
      }
      req.user = user;
      next();
    },
  )(req, res, next);
};

const signUpMiddleware = async (
  req: TypedRequestBody<Prisma.UserCreateInput>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    await signUpSchema.validate(req.body);
    const existedUser = await prismaClient.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    
    if (existedUser) {
      next(new UserAlreadyExistsError());
    }

    next();
  } catch (err) {
    const { message } = err as Error;
    res.status(HttpStatusCode.UNAUTHORIZED).json({ message });
    next(err);
  }
};

const googleAuth = async (
  req: TypedRequestQuery<{ token?: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/',
    state: req.query.token?.toString(),
  })(req, res, next);
};

const googleMiddleware = async (
  req: TypedRequestBody<User>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/',
  })(req, res, next);
};

const facebookAuth = async (
  req: TypedRequestQuery<{ token?: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  passport.authenticate('facebook', {
    session: false,
    failureRedirect: '/',
    state: req.query.token?.toString(),
  })(req, res, next);
};

const facebookMiddleware = async (
  req: TypedRequestBody<User>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  passport.authenticate('facebook', {
    session: false,
    failureRedirect: '/',
  })(req, res, next);
};

export {
  localAuth,
  signUpMiddleware,
  googleAuth,
  googleMiddleware,
  facebookAuth,
  facebookMiddleware,
};
