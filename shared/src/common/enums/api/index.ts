export enum ApiRoutes {
  AUTH = '/auth',
  VERIFY = '/verify',
}

export enum AuthApiRoutes {
  SIGN_IN = '/local/sign-in',
  SIGN_UP = '/local/sign-up',
  REFRESH_TOKEN = '/refresh-token',
  USER = '/user',
  RESET_PASSWORD_CHECK_TOKEN = '/local/reset-password-check-token',
  RESET_PASSWORD_REQUEST = '/local/reset-password-request/:email',
  RESET_PASSWORD = '/local/reset-password',
  GOOGLE_SIGN = '/google/sign',
  GOOGLE_REDIRECT = '/google/redirect',
  FACEBOOK_SIGN = '/facebook/sign',
  FACEBOOK_REDIRECT = '/facebook/redirect',
}

export enum VerifyApiRoutes {
  ACTIVATE_EMAIL = '/email/:token',
  RESEND_VERIFICATION_LINK = '/email/resend-link',
}
