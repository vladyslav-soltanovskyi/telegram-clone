import { Repositories } from '@repositories/index';
import { AWSService } from './aws';
import { EmailService } from './email';
import { AuthService } from './auth';
import { VerifyService } from './verify';

export const initServices = (
  repositories: Repositories,
) => {
  const emailService = new EmailService();
  const awsService = new AWSService();
  
  const verifyService = new VerifyService(
    repositories.userRepository,
    repositories.userSecurityRepository,
    emailService
  );

  const authService = new AuthService(
    repositories.userRepository,
    emailService,
    repositories.userSecurityRepository,
    verifyService
  );
  
  return {
    awsService,
    authService,
    verifyService,
    emailService,
  }
};

export type Services = ReturnType<typeof initServices>;

export type {
  AuthService,
  VerifyService,
  AWSService,
  EmailService
}