// import { ExceptionMessage } from '@common/enums/exception/exception';
import { prismaClient } from '@config/db';
import { bcryptHash, verifyPassword, lang } from '@helpers/index';
import { Request } from 'express';
import { Strategy as LocalStrategy } from 'passport-local';

const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  async (req: Request, email, password, done) => {
    try {
      const normalizedEmail = email.toLowerCase();

      const user = await prismaClient.user.findUnique({
        where: { email: normalizedEmail },
        include: {
          userSecurity: true,
        },
      });

      const passwordHash = await bcryptHash(password);
      
      const passwordMatches = await verifyPassword(
        user.userSecurity.password,
        passwordHash
      );

      if (!user || !passwordMatches) {
        return done(null, false, {
          message: lang('translation:WRONG_PASSWORD_OR_EMAIL'),
        });
      }

      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  },
);

export { localStrategy };
