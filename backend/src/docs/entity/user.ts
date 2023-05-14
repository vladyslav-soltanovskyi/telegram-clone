/**
 * @openapi
 * definitions:
 *   User:
 *     type: object
 *     description: Model User
 *     properties:
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       isVerified:
 *         type: boolean
 *       createdAt:
 *         type: string
 *         format: date-time
 *       status:
 *         "$ref": "#/definitions/UserStatusTypes"
 *       avatar:
 *         type: string
 *         nullable: true
 *       lastName:
 *         type: string
 *       firstName:
 *         type: string
 *       phone:
 *         type: string
 *       email:
 *         type: string
 *       id:
 *         type: string
 */