export interface EmailOptions {
  from?: string;
  to: string | Array<string>;
  subject: string;
  html?: string;
  template?: string;
}

export interface ResetPasswortRequestOptions {
  email: string;
  firstName: string;
  lastName?: string;
  token: string;
}

export interface ResetPasswordConfirmOptions {
  email: string;
  firstName: string;
  lastName?: string;
}