export const API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
export const API_AIR_POLUTION_URL = 'https://api.openweathermap.org/data/2.5/air_pollution?';
export const API_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
export const API_GEO_DB_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_GEO_DB_API_KEY}`,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
