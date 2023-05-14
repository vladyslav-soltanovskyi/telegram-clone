/**
 * @openapi
 * definitions:
 *   Chat:
 *     type: object
 *     description: Model Chat
 *     properties:
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       createdAt:
 *         type: string
 *         format: date-time
 *       ext:
 *         type: string
 *       title:
 *         type: string
 *       url:
 *         type: string
 *       type:
 *         "$ref": "#/definitions/AttachmentTypes"
 *       messageId:
 *         type: string
 *       userId:
 *         type: string
 *       id:
 *         type: string
 */