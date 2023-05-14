import { HttpStatusCode } from '@telegram-clone/shared';
import { HttpError } from '@errors/http-error';
import { lang } from '@helpers/index';

class TokenInvalidError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: lang('translation:TOKEN_INVALID'),
    });
  }
}

export { TokenInvalidError };