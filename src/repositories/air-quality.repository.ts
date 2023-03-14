import { getDatabase } from '../database';

export async function insertItem(airQuality: any) {
  console.log(airQuality);

  return new Promise((resolve, reject) => {
    getDatabase().run('INSERT INTO AirQualityData(ts, aqius, mainus, aqicn, maincn) VALUES(?, ?, ?, ?, ?)',
    [airQuality.ts, airQuality.aqius, airQuality.mainus, airQuality.aqicn, airQuality.maincn], (err) => {
      if (err) {
        return reject(err)
      }
    });
  }) 
}

export async function getItem(query: any) {
  return new Promise((resolve, reject) => {
      getDatabase().get(query, (err, rows) => {
        if (err) {
          return reject(err);
        }

        resolve(rows);
       });
  });
}