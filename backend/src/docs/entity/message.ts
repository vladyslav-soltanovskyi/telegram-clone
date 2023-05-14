/**
 * @openapi
 * definitions:
 *   Message:
 *     type: object
 *     description: Model Message
 *     properties:
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       createdAt:
 *         type: string
 *         format: date-time
 *       emojis:
 *         type: array
 *         items:
 *           "$ref": "#/definitions/Emoji"
 *       replyTo:
 *         "$ref": "#/definitions/Message"
 *       views:
 *         type: array
 *         items:
 *           "$ref": "#/definitions/UserViewedMessage"
 *       attachments:
 *         type: array
 *         items:
 *           "$ref": "#/definitions/Sender"
 *       text:
 *         type: string
 *         nullable: true
 *       sender:
 *         "$ref": "#/definitions/Sender"
 *       senderId:
 *         type: string
 *       chatId:
 *         type: string
 *       id:
 *         type: string
 */