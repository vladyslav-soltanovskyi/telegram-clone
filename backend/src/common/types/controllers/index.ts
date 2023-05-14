import { Request } from 'express';

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export interface TypedRequestQuery<T extends Query> extends Request {
  query: T;
}

export interface TypedRequestParams<T extends ParamsDictionary> extends Request {
  params: T;
}

export interface TypedRequest<T extends Query, U> extends Request {
  body: U;
  query: T;
}