import { Router } from 'express';
import type { Controllers } from '@controllers/index';
import { ApiRoutes, AuthApiRoutes } from '@telegram-clone/shared';
import { apiPath, wrap } from '@helpers/index';
import {
  authMiddleware,
  localAuth,
  signUpMiddleware,
  facebookAuth,
  facebookMiddleware,
  googleAuth,
  googleMiddleware,
  validateMiddleware
} from '@middlewares/index';
import { signInSchema, signUpSchema } from '@validation/index';

export const initAuthRoutes = (
  { authController }: Controllers,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /auth/local/sign-in:
   *   post:
   *     description: Authenticates user by email & password
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/SignInBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/SignInResponse"
   */

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_IN),
    validateMiddleware(signInSchema),
    localAuth,
    wrap(authController.signinLocal)
  );

  /**
   * @openapi
   * /auth/sign-up:
   *   description: Creates user's account, but unverified (isVerified = false)
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/SignUpBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/SignUpResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_UP),
    validateMiddleware(signUpSchema),
    signUpMiddleware,
    wrap(authController.signupLocal)
  );

  /**
   * @openapi
   * /auth/user:
   *   get:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: userId
   *         in: query
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/User"
   */

  router.get(
    apiPath(path, AuthApiRoutes.USER),
    authMiddleware,
    wrap(authController.getCurrentUser)
  );

  router.get(
    apiPath(path, AuthApiRoutes.GOOGLE_SIGN),
    googleAuth
  );

  router.get(
    apiPath(path, AuthApiRoutes.GOOGLE_REDIRECT),
    googleMiddleware,
    authController.signOAuthProvider
  );

  router.get(
    apiPath(path, AuthApiRoutes.FACEBOOK_SIGN),
    facebookAuth
  );

  router.get(
    apiPath(path, AuthApiRoutes.FACEBOOK_REDIRECT),
    facebookMiddleware,
    authController.signOAuthProvider
  );

  /**
   * @openapi
   * /auth/local/reset-password-request/:email:
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         in: path
   *         required: true
   *         type: string
   *         schema:
   *           type: string
   *     responses:
   *       204:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  
  router.post(
    apiPath(path, AuthApiRoutes.RESET_PASSWORD_REQUEST),
    wrap(authController.resetPasswordRequest)
  );

  /**
   * @openapi
   * /auth/local/reset-password-check-token:
   *   get:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         in: query
   *         required: true
   *         type: string
   *     responses:
   *       3**:
   *         description: Redirect to reset password form
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  
  router.get(
    apiPath(path, AuthApiRoutes.RESET_PASSWORD_CHECK_TOKEN),
    authController.resetPasswordCheckToken
  );

  /**
   * @openapi
   * /auth/local/reset-password:
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/ResetPasswordBody"
   *     responses:
   *       204:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  
  router.post(
    apiPath(path, AuthApiRoutes.RESET_PASSWORD),
    wrap(authController.resetPassword)
  );

  /**
   * @openapi
   * /auth/refresh-token:
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/RefreshTokenBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/RefreshTokenResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, AuthApiRoutes.REFRESH_TOKEN),
    wrap(authController.refreshToken)
  );

  return router;
};
