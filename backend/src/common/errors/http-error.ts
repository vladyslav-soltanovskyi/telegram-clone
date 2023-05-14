import { HttpStatusCode } from "@telegram-clone/shared";

const DEFAULT_MESSAGE = 'Network Error';

class HttpError extends Error {
  status: HttpStatusCode;

  constructor({
    status = HttpStatusCode.INTERNAL_SERVER_ERROR,
    message = DEFAULT_MESSAGE,
  } = {}) {
    super(message);
    this.status = status;
  }
}

export { HttpError };
