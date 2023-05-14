import { getEnv } from '@helpers/index';
import { User } from '@prisma/client';
import { AuthService } from '@services/index';
import {
  ForgotPasswordRequestData,
  RefreshTokenRequestData,
  ResetPasswordCheckTokenRequestData,
  ResetPasswordRequestData,
  SignUpRequestData
} from '@telegram-clone/shared';
import type {
  SignInRequestData,
  TypedRequestBody,
  TypedRequestParams,
  TypedRequestQuery
} from '@types-app/index';
import type { NextFunction, Response, Request } from 'express';

export class AuthController {
  constructor(
    private _authService: AuthService
  ) {}
  
  public async signupLocal(
    req: TypedRequestBody<SignUpRequestData>
  ) {
    return await this._authService.signupLocal(req.body);
  }

  public async signinLocal(
    req: TypedRequestBody<SignInRequestData>
  ) {
    const { accessToken, refreshToken } = await this._authService.signinLocal(req.user as User);
    return {
      accessToken,
      refreshToken,
      user: req.user as User
    }
  }

  public async getCurrentUser(
    req: Request
  ) {
    return await this._authService.getCurrentUser(req.tokenPayload.userId);
  }

  public async resetPasswordRequest (
    req: TypedRequestParams<ForgotPasswordRequestData>
  ) {
    return await this._authService.requestPasswordReset(req.params.email);
  }

  public async resetPasswordCheckToken(
    req: TypedRequestQuery<ResetPasswordCheckTokenRequestData>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.query.token) return;
      const token = req.query.token;
      const userId = await this._authService.resetPasswordCheckToken(token);
      res.redirect(`${getEnv('FRONTEND_URL')}/reset-password?id=${userId}`);
    } catch (error) {
      next(error);
    }
  }
  
  public async resetPassword(
    req: TypedRequestBody<ResetPasswordRequestData>
  ): Promise<void> {
    await this._authService.resetPassword(req.body.id, req.body.password);
  }

  public async signOAuthProvider(
    req: TypedRequestBody<User>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { accessToken, refreshToken } = await this._authService.signinLocal(
        req.user as User
      );
      res.redirect(
        `${getEnv('FRONTEND_URL')}/sign-redirect?accessToken=${accessToken}&refreshToken=${refreshToken}`
      );
    } catch (error) {
      next(error);
    }
  }

  public async refreshToken(
    req: TypedRequestBody<RefreshTokenRequestData>
  ) {
    const accessToken = await this._authService.refreshToken(req.body.refreshToken);
    return {
      accessToken
    };
  }
}