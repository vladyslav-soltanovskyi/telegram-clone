import { facebookStrategy } from './facebook.strategy';
import { googleStrategy } from './google.strategy';
import { localStrategy } from './local.strategy';
import passport from 'passport';

const initializeStrategies = (): void => {
  const strategies = [facebookStrategy, googleStrategy, localStrategy];
  strategies.forEach((strategy) => passport.use(strategy));
};

export { initializeStrategies };
