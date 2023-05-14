import { HttpStatusCode } from '@telegram-clone/shared';
import { HttpError } from '../http-error';
import { lang } from '@helpers/index';

class NoFileProvidedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:NO_FILE_ERROR'),
    });
  }
}

export { NoFileProvidedError };
