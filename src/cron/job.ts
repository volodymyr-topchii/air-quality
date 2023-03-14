import cron from 'node-cron';
import { requestAirQuality } from '../iqair/api';
import { insertItem } from '../repositories/air-quality.repository';
import { initDatabase } from '../database';

import * as dotenv from 'dotenv'
dotenv.config()

const job = cron.schedule('*/10 * * * * *', async () => {
  try {
    console.info('job started');
    initDatabase();

    const airQuality = await requestAirQuality(2.352222, 48.856613);

    await insertItem(airQuality.current.pollution);
  } catch (error) {
    console.error('Job error: ', error);
  }
});

job.start();
