import { getEnv } from "@helpers/env";
import { ApiRoutes } from "@telegram-clone/shared";

export const EmailActivation = {
  ACTIVATE_URL: `${getEnv('BACKEND_URL')}${ApiRoutes.VERIFY}/user/`,
  SUCCESS_URL: `${getEnv('FRONTEND_URL')}/verification-success`,
  FAILED_URL: `${getEnv('FRONTEND_URL')}/verification-failed`,
};