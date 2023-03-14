import axios from 'axios';

export const requestAirQuality = async (longitude: any, latitude: any) => {
  try {
    const result = await axios.get(
      `${process.env.API_URL}/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.API_KEY}`
    );

    return result.data.data;
    
  } catch (error) {
    console.error('Error while getting air quality data');
  }
};
