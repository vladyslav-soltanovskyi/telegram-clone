import cors from 'cors';
import express, { json, urlencoded } from 'express';
import { prismaClient } from './config/db';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { getEnv, loggerService } from '@helpers/index';
import { errorsHandler, loggerMiddleware, langMiddleware } from '@middlewares/index';
import { initRepositories } from './repositories';
import { initServices } from './services';
import { initControllers } from 'controllers';
import { initRoutes } from './api/routes';
import { swaggerOptions } from './config/swagger-options';

const app = express();
const port = getEnv('PORT');
const swaggerSpecification = swaggerJsdoc(swaggerOptions);

const repositories = initRepositories(prismaClient);
const services = initServices(repositories);
const controllers = initControllers(services);
const routes = initRoutes(controllers);

app
  .use(cors())
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(loggerMiddleware)
  .use(langMiddleware)
  .use(routes)
  .use(errorsHandler)
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecification))
  .on('close', () => prismaClient.$disconnect())
  .listen(port, () => {
    loggerService.log(`Server is running on port ${port}`);
  });