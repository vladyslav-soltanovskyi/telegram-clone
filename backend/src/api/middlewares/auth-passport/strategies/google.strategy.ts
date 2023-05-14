import { prismaClient } from '@config/db';
import { getEnv, verifyToken } from '@helpers/index';
import { TokenPayload } from '@types-app/jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const googleStrategy = new GoogleStrategy(
  {
    clientID: getEnv('GOOGLE_CLIENT_ID'),
    clientSecret: getEnv('GOOGLE_CLIENT_SECRET'),
    callbackURL: `${getEnv('BACKEND_URL')}/auth/google/redirect`,
    passReqToCallback: true,
    scope: ['profile', 'email'],
  },
  async (req, accessToken, refreshToken, profile, done) => {
    try {
      let user = await prismaClient.user.findFirst({
        where: {
          userSecurity: {
            googleAccId: profile.id,
          },
        },
      });

      if (user) return done(null, user);

      const payload =
        typeof req.query.state === 'string'
          ? (verifyToken<TokenPayload>(req.query.state))
          : undefined;
      if (payload) {
        user = await prismaClient.user.update({
          where: {
            id: payload.userId
          },
          data: {
            userSecurity: {
              update: {
                googleAccId: profile.id,
              },
            },
          },
        });

        return done(null, user);
      }
      const [firstName, lastName] = profile.displayName.split('');

      user = await prismaClient.user.upsert({
        where: {
          email: profile._json.email,
        },
        update: {
          userSecurity: {
            update: {
              googleAccId: profile.id,
            },
          },
        },
        create: {
          firstName: firstName,
          lastName: lastName,
          email: profile._json.email,
          avatar: profile._json.picture,
          userSecurity: {
            create: {
              googleAccId: profile.id,
            },
          },
        },
      });

      done(null, user);
    } catch (err) {
      done(err as Error, false);
    }
  },
);

export { googleStrategy };
