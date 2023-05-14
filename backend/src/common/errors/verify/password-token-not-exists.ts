import { HttpStatusCode } from '@telegram-clone/shared';
import { HttpError } from '@errors/http-error';
import { lang } from '@helpers/index';

class PasswordTokenNotExistsError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: lang('translation:PASSWORD_TOKEN_NOT_EXISTS'),
    });
  }
}

export { PasswordTokenNotExistsError };
