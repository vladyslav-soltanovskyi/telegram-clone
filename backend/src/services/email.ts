import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { getEnv } from '@helpers/index';
import {
  EmailOptions,
  ResetPasswortRequestOptions,
  ResetPasswordConfirmOptions
} from '@types-app/email';
import { loggerService } from '@helpers/index';
import {
  getActivationLink,
  getResetPasswordConfirmMessageTemplate,
  getResetPasswordRequestTemlpate
} from '@email-templates/index';

export class EmailService {
  private _transporter: Transporter<SMTPTransport.SentMessageInfo>;
  
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: getEnv('EMAIL_HOST'),
      port: 587,
      auth: {
        user: getEnv('EMAIL_USERNAME'),
        pass: getEnv('EMAIL_PASSWORD'),
      },
    });
  }
  
  public async send(options: EmailOptions): Promise<void> {
    try {
      await this._transporter.sendMail({
        from: getEnv('FROM_EMAIL'),
        template: 'email',
        ...options
      });
    } catch(err) {
      loggerService.log(err.message);
    }
  }

  public async sendVerifyEmail(email: string, token: string): Promise<void> {
    await this.send({
      to: email,
      subject: "Welcome to 'Telegram clone' and verify your email",
      html: getActivationLink(token)
    });
  }

  public async sendResetPasswordRequest({
    email,
    firstName,
    lastName,
    token
  }: ResetPasswortRequestOptions): Promise<void> {
    await this.send({
      to: email,
      subject: "Password Reset Request",
      html: getResetPasswordRequestTemlpate(`${firstName} ${lastName ?? ''}`.trim(), token)
    });
  }

  public async sendResetPasswortConfirm({
    email,
    firstName,
    lastName,
  }: ResetPasswordConfirmOptions): Promise<void> {
    await this.send({
      to: email,
      subject: "Password Reset Successfully",
      html: getResetPasswordConfirmMessageTemplate(`${firstName} ${lastName ?? ''}`.trim())
    });
  }
}