export enum HttpHeader {
  CONTENT_TYPE = 'Content-Type',
  AUTHORIZATION = 'Authorization',
  ACCEPT_LANGUAGE = 'accept-language',
}

export enum HttpContentType {
  APPLICATION_JSON = 'application/json',
  FORM_DATA = 'multipart/form-data',
}

export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export enum HttpAcceptLanguage {
  EN = 'en',
  UA = 'ua',
  PL = 'pl',
}