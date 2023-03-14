import * as iqair from "../../iqair/api"
import { getAirQuality } from '../../services/air-quality.service';

jest.mock('../../iqair/api');

describe('air quality service', () => {
  it('should get air quality data ', async () => {
    const requestAirQualitySpy = {
      city: "Odesa",
      ts: "2023-03-12T11:00:00.000Z",
      aqius: 35,
      mainus: "p2",
      aqicn: 9,
      maincn: "p2",
    };

    jest.spyOn(iqair, 'requestAirQuality').mockResolvedValue(requestAirQualitySpy);
    
    const result = await getAirQuality(46.48, 30.72);
    
    expect(iqair.requestAirQuality).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      city: "Odesa",
      ts: "2023-03-12T11:00:00.000Z",
      aqius: 35,
      mainus: "p2",
      aqicn: 9,
      maincn: "p2",
    });
  });
});
