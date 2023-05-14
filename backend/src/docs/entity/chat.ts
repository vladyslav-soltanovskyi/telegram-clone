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
 *       type:
 *         "$ref": "#/definitions/ChatTypes"
 *       poster:
 *         type: string
 *         nullable: true
 *       title:
 *         type: string
 *         nullable: true
 *       id:
 *         type: string
 */