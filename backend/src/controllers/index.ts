import { Services } from '@services/index';
import { AuthController } from './auth';
import { VerifyController } from './verify';

export const initControllers = (
  services: Services,
) => {
  const authController = new AuthController(services.authService);
  const verifyController = new VerifyController(services.verifyService);
  
  return {
    authController,
    verifyController
  }
};

export type Controllers = ReturnType<typeof initControllers>;

export type {
  AuthController,
  VerifyController
}