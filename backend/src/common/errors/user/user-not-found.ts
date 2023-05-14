import { HttpStatusCode } from '@telegram-clone/shared';
import { HttpError } from '@errors/http-error';
import { lang } from '@helpers/index';

class UserNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: lang('translation:USER_NOT_FOUND'),
    });
  }
}

export { UserNotFoundError };
