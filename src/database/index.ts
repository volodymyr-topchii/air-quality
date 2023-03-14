import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('airQuality.db');

export function initDatabase() {
  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS AirQualityData (ts TEXT, aqius INTEGER, mainus TEXT, aqicn INTEGER, maincn TEXT)");
  });
}

export function getDatabase() {
  return db;
}