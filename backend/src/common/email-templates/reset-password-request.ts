import { ApiRoutes, AuthApiRoutes } from "@telegram-clone/shared";
import { getEnv } from "@helpers/index";

export const getResetPasswordRequestTemlpate = (name: string, token: string): string => {
  return `
    <p>
      Hello, ${name}<br><br> We received a request to reset the password for your account for this email address. To initiate the password reset process for your account, click the link below.
    </p>
    <p>
      <a target="_blank" href="${getEnv('BACKEND_URL')}${ApiRoutes.AUTH}${AuthApiRoutes.RESET_PASSWORD_CHECK_TOKEN}?token=${token}">
        <strong>Reset Password</strong></a>
    </p>
    <p>This link can only be used once.<br><br> If you did not make this request, you can simply ignore this email.</p>
    <p>
      Sincerely, 'Telegram Clone' Team
    </p>
  `;
};
