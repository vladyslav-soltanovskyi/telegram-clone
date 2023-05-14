export enum ValidationMessage {
  FIRSTNAME_REQUIRED = 'validation:personal.firstNameRequired',
  FIRSTNAME_MAX = 'validation:personal.firstNameMax',

  EMAIL_REQUIRED = 'validation:personal.emailRequired',
  EMAIL_INVALID = 'validation:personal.emailInvalid',

  PASSWORD_MIN_SYMBOLS = 'validation:password.minSymbols',
  PASSWORD_MAX_SYMBOLS = 'validation:password.maxSymbols',
  PASSWORD_REQUIRED = 'validation:password.passwordRequired',
}
