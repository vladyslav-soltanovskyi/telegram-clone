import { HttpStatusCode } from '@telegram-clone/shared';
import { HttpError } from '@errors/http-error';
import { lang } from '@helpers/index';

class UserNotVerifiedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:USER_NOT_VERIFIED'),
    });
  }
}

export { UserNotVerifiedError };
