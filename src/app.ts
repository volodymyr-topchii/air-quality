import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';

import { initDatabase } from './database';
// import job from './cron/job';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../docs/swagger.json';

const app = express();
  
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initDatabase();

app.use('/', routes.airQuality);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

export default app;
