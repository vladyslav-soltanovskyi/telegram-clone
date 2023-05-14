/**
 * @openapi
 * definitions:
 *   ChatMember:
 *     type: object
 *     description: Model Chat
 *     properties:
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       createdAt:
 *         type: string
 *         format: date-time
 *       type:
 *         "$ref": "#/definitions/MemberTypes"
 *       chatId:
 *         type: string
 *       userId:
 *         type: string
 *       user:
 *         "$ref": "#/definitions/User"
 *       id:
 *         type: string
 */