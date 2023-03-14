import request from 'supertest';
import app from '../../app';

describe('air quality route', () => {
  it('should test route', async () => {
    const mockedData = {
      Pollution: {
        aqicn: 23,
        aqius: 59,
        maincn: 'p2',
        mainus: 'p2',
        ts: '2023-03-14T12:00:00.000Z'
      }
    };

    const response = await request(app)
      .get('/nearest-city-pollution')
      .query({longitude: 46.52, latitude: 34.23})

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(mockedData)
  });
});
