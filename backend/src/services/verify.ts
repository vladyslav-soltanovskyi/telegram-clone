import { createEmailToken, verifyToken } from "@helpers/index";
import { UserRepository } from "@repositories/user";
import { UserSecurityRepository } from "@repositories/user-security";
import { EmailTokenPayload } from "@types-app/index";
import { EmailActivation } from '@constants/index';
import type { EmailService } from "@services/index";

export class VerifyService {
  constructor (
      private _userRepository: UserRepository,
      private _userSecurityRepository: UserSecurityRepository,
      private _emailService: EmailService
  ) {}

  public async activateMail(token: string) {
    const user = await this._userRepository.getByToken(token);
    if (!user) {
      return EmailActivation.FAILED_URL;
    }

    const email = verifyToken<EmailTokenPayload>(token);
    if (!email) {
      return EmailActivation.FAILED_URL;
    }

    await this._userSecurityRepository.updateEmailToken(user.id, null);
    return EmailActivation.SUCCESS_URL;
  }

  public async resendVerificationLink(email: string) {
    const user = await this._userRepository.getByEmail(email);
    if (!user) {
      return;
    }

    const userSecurity = await this._userSecurityRepository.getByUserId(user.id);
    if (!userSecurity?.emailActivationToken) {
      return;
    }

    await this.sendVerificationLink(user.id, email);
  }

  public async sendVerificationLink(id: string, email: string) {
    const token = createEmailToken({ email });
    await this._emailService.sendVerifyEmail(email, token);
    await this._userSecurityRepository.updateEmailToken(id, token);
  }
}