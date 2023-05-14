import { User } from '@prisma/client';
import { EmailService, VerifyService } from './index';
import type { UserRepository, UserSecurityRepository } from '@repositories/index';
import { PasswordChangeTokenPayload, TokenPayload } from '@types-app/index';
import {
  SignInResponseData,
  SignUpRequestData,
  SignUpResponseData,
  UserResponseData
} from '@telegram-clone/shared';
import {
  bcryptHash,
  createPasswordChangeToken,
  createToken,
  verifyPassword,
  verifyToken
} from '@helpers/index';
import {
  UserAlreadyExistsError,
  UserNotFoundError,
  TokenInvalidError,
  PasswordTokenNotExistsError,
  InvalidPasswordTokenError,
  SamePasswordsError
} from '@errors/index';

export class AuthService {
  constructor(
    private _userRepository: UserRepository,
    private _emailService: EmailService,
    private _userSecurityRepository: UserSecurityRepository,
    private _verifyService: VerifyService,
  ) {}

  public async signupLocal(
    user: SignUpRequestData,
  ): Promise<SignUpResponseData> {
    const { password, ...userData } = user;
    const hashedPassword = await bcryptHash(password);
    
    const { id, email } = await this._userRepository.create({
      password: hashedPassword,
      ...userData
    });

    await this._verifyService.sendVerificationLink(id, email);
    
    return { message: 'You successfully register!' };
  }
  
  public async signinLocal(user: User): Promise<SignInResponseData> {
    const { email, id } = user;
    const { accessToken, refreshToken } = this.getTokenData(id, email);
    const { refreshToken: refresh_token } = await this._userSecurityRepository.getRefreshToken(id);
  
    try {
      if (refresh_token){
        verifyToken(refresh_token);
      }
    } catch {
      await this._userSecurityRepository.updateRefreshToken(id, refreshToken);
    }
  
    if (!refresh_token) {
      await this._userSecurityRepository.updateRefreshToken(id, refreshToken);
    }
  
    return {
      accessToken,
      refreshToken: refresh_token || refreshToken,
      user: user as UserResponseData
    };
  }

  public async getCurrentUser(userId: string) {
    return await this._userRepository.getById(userId);
  }
  
  public async requestPasswordReset(email: string): Promise<void> {
    const user = await this._userRepository.getByEmail(email);
    
    if (!user) {
      throw new UserAlreadyExistsError();
    }
  
    const resetToken = createPasswordChangeToken({ userId: user.id });

    await this._userSecurityRepository.updatePasswordToken(user.id, resetToken);

    await this._emailService.sendResetPasswordRequest({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      token: resetToken
    });
  }
  
  public async resetPasswordCheckToken(token: string): Promise<string> {
    const payload = verifyToken<PasswordChangeTokenPayload>(token);

    if (!payload) {
      throw new TokenInvalidError();
    }

    const { userId } = payload;
    const userSecurity = await this._userSecurityRepository.getByUserId(userId);
  
    if (!userSecurity) {
      throw new UserNotFoundError();
    }
    if (!userSecurity.passwordChangeToken) {
      throw new PasswordTokenNotExistsError();
    }
  
    await this._userSecurityRepository.updatePasswordToken(userId, null);
  
    if (token !== userSecurity.passwordChangeToken) {
      throw new InvalidPasswordTokenError();
    }

    return userId;
  }
  
  public async resetPassword(userId: string, password: string): Promise<void> {
    const user = await this._userRepository.getById(userId)

    if (!user) {
      throw new UserNotFoundError();
    }
    const userSecurity = await this._userSecurityRepository.getByUserId(userId);

    if (!userSecurity) {
      throw new UserNotFoundError();
    }

    const passwordHash = await bcryptHash(password);
    const isSamePassword = await verifyPassword(userSecurity.password, passwordHash)
    
    if (isSamePassword) {
      throw new SamePasswordsError();
    }
    
    await this._userSecurityRepository.updatePassword(userId, passwordHash);
  
    await this._emailService.sendResetPasswortConfirm({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    })
  }
  
  public async refreshToken(token: string) {
    const tokenPayload = verifyToken<TokenPayload>(token);
    
    if (!tokenPayload) {
      throw new TokenInvalidError();
    }

    const user = await this._userRepository.getByIdAndRefreshToken(tokenPayload.userId, token);

    if(!user) {
      throw new UserNotFoundError();
    }

    const { accessToken } = this.getTokenData(user.id, user.email);
  
    return accessToken;
  }

  private getTokenData(userId: string, email: string) {
    const userPayload: TokenPayload = {
      userId,
      email
    };

    const accessToken = createToken(userPayload, true);
    const refreshToken = createToken(userPayload);

    return {
      accessToken,
      refreshToken,
    };
  }
}