import { Controllers } from "@controllers/index";
import { apiPath, wrap } from "@helpers/index";
import { ApiRoutes, VerifyApiRoutes } from "@telegram-clone/shared";
import { Router } from "express";

export const initVerifyRoutes = (
  { verifyController }: Controllers,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /verify/email/:token:
   *   post:
   *     tags: [Verify]
   *     description: Activates user's email using token then redirects to website with info succeeded/failed status depending on result
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: token
   *         required: true
   *         type: string
   *     responses:
   *       3**:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, VerifyApiRoutes.ACTIVATE_EMAIL),
    verifyController.activateMail
  );

  /**
   * @openapi
   * /verify/email/resend-link:
   *   post:
   *     tags: [Verify]
   *     description: Resends email verification link | Sends Email to user's email
   *     produces:
   *       - application/json
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
    apiPath(path, VerifyApiRoutes.RESEND_VERIFICATION_LINK),
    wrap(verifyController.resendVerificationLink),
  );

  return router;
};
