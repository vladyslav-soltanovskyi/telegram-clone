import { HttpStatusCode } from '@telegram-clone/shared';
import { HttpError } from '@errors/http-error';
import { lang } from '@helpers/index';

class UserAlreadyExistsError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: lang('translation:USER_ALREADY_EXISTS'),
    });
  }
}

export { UserAlreadyExistsError };
