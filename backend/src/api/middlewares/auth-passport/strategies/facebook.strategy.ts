import { prismaClient } from '@config/db';
import { getEnv, verifyToken } from '@helpers/index';
import { TokenPayload } from '@types-app/jwt';
import { Strategy as FacebookStrategy } from 'passport-facebook';

const facebookStrategy = new FacebookStrategy(
  {
    clientID: getEnv('FACEBOOK_APP_ID'),
    clientSecret: getEnv('FACEBOOK_SECRET_KEY'),
    callbackURL: `${getEnv('FRONTEND_URL')}/auth/facebook/redirect`,
    profileFields: [
      'email',
      'displayName',
      'picture',
    ],
    passReqToCallback: true,
  },
  async (req, accessToken, refreshToken, profile, done) => {
    try {
      let user = await prismaClient.user.findFirst({
        where: {
          userSecurity: {
            facebookAccId: profile.id,
          },
        },
      });

      if (user) return done(null, user);

      const payload =
        typeof req.query.state === 'string' 
          ? verifyToken<TokenPayload>(req.query.state)
          : undefined;

      if (payload) {
        user = await prismaClient.user.update({
          where: {
            id: payload.userId,
          },
          data: {
            userSecurity: {
              update: {
                facebookAccId: profile.id,
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
              facebookAccId: profile.id,
            },
          },
        },
        create: {
          firstName: firstName,
          lastName: lastName,
          email: profile._json.email,
          avatar: profile._json.picture.data.url,
          userSecurity: {
            create: {
              facebookAccId: profile.id,
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

export { facebookStrategy };
