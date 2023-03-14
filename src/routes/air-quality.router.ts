import { Router } from 'express';

import { getAirQuality, getMostPolluted } from '../services/air-quality.service';

const router = Router();

router.get('/nearest-city-pollution', async (req, res) => {
  const longitude = req.query.longitude;
  const latitude = req.query.latitude;

  const airQuality = await getAirQuality(longitude, latitude);

  res.status(200).send({ Pollution: airQuality.current.pollution });
});

router.get('/most-polluted', async (req, res) => {
    const item = await getMostPolluted();

    res.status(200).send(item);
});

export default router;
