import { HttpStatusCode } from '@telegram-clone/shared';
import { HttpError } from '@errors/http-error';
import { lang } from '@helpers/index';

class InvalidPasswordTokenError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: lang('translation:INVALID_PASSWORD_TOKEN'),
    });
  }
}

export { InvalidPasswordTokenError };
