export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Telegram-clone API',
      version: '1.0.0',
    },
  },
  apis: ['**/routes/*.ts', '**/docs/**/*.ts'],
};