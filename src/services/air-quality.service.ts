import { requestAirQuality } from '../iqair/api';
import { getItem } from '../repositories/air-quality.repository';

export async function getAirQuality(longitude: any, latitude: any) {
  return await requestAirQuality(longitude, latitude);
}

export async function getMostPolluted() {
  return await getItem(`SELECT ts FROM AirQualityData ORDER BY aqius DESC`);
}
