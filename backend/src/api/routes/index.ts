import type { Router } from 'express';
import { ApiRoutes } from '@telegram-clone/shared';
import { Controllers } from '@controllers/index';
import { initAuthRoutes } from './auth';
import { initVerifyRoutes } from './verify';

export const initRoutes = (controllers: Controllers): Router[] => [
  initAuthRoutes(controllers, ApiRoutes.AUTH),
  initVerifyRoutes(controllers, ApiRoutes.VERIFY),
];
