import { HttpStatusCode } from "@telegram-clone/shared";
import { HttpError } from "../http-error";
import { lang } from '@helpers/index';

class UnsupportedFileExtensionError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:UNSUPPORTED_FILE_EXTENSION'),
    });
  }
}

export { UnsupportedFileExtensionError };
