import { lang } from '@helpers/lang';
import { ValidationMessage, ValidationRanges } from '@telegram-clone/shared';
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(
      lang(ValidationMessage.FIRSTNAME_REQUIRED)
    )
    .max(
      ValidationRanges.MAX_FIRSTNAME_SYMBOLS,
      lang(ValidationMessage.FIRSTNAME_MAX)
    ),
  email: Yup.string()
    .required(
      lang(ValidationMessage.EMAIL_REQUIRED)
    )
    .email(
      lang(ValidationMessage.EMAIL_INVALID)
    ),
  password: Yup.string()
    .required(
      lang(ValidationMessage.PASSWORD_REQUIRED)
    )
    .min(
      ValidationRanges.MIN_PASSWORD_SYMMBOLS,
      lang(ValidationMessage.PASSWORD_MIN_SYMBOLS)
    )
    .max(
      ValidationRanges.MAX_PASSWORD_SYBOLS,
      lang(ValidationMessage.PASSWORD_MAX_SYMBOLS)
    ),
});

export { signUpSchema };