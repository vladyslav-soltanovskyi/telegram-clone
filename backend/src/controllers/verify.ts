import {
  VerificationEmailData,
  ActivationEmailData
} from '@telegram-clone/shared';
import { VerifyService } from '@services/index';
import { NextFunction, Response } from 'express';
import {
  TypedRequestBody,
  TypedRequestParams
} from '@types-app/index';

export class VerifyController {
  constructor(
    private _verifyService: VerifyService
  ) {}
  
  public async resendVerificationLink (
    req: TypedRequestBody<VerificationEmailData>
  ) {
    return this._verifyService.resendVerificationLink(req.body.email);
  }

  public async activateMail (
    req: TypedRequestParams<ActivationEmailData>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const path = await this._verifyService.activateMail(req.body.token);
      return res.redirect(path);
    } catch (error) {
      next(error);
    }
  }
}