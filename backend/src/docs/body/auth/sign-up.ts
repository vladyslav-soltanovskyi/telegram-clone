/**
 * @openapi
 * definitions:
 *   SignUpBody:
 *     properties:
 *      user:
 *        type: object
 *        required: true
 *        properties:
 *          firstName:
 *            type: string
 *            required: true
 *            example: Jan
 *          lastName:
 *            type: string
 *            required: true
 *            example: Nowak
 *          email:
 *            type: string
 *            required: true
 *            example: example@test.com
 *          avatar:
 *            type: string
 *            required: false
 *          password:
 *            type: string
 *            required: true
 */