import { HttpError } from '../http-error';
import { HttpStatusCode } from '@telegram-clone/shared';
import { lang } from '@helpers/index';

class FileSizeTooLargeError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:FILE_SIZE_TOO_LARGE'),
    });
  }
}

export { FileSizeTooLargeError };
