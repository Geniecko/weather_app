import { API_KEY, API_URL } from '../../api/data';
import { WeatherAction, SET_LOADING, WeatherData, SET_ERROR, GET_WEATHER } from '../types';

export const getWeather = async (city: string) => {
  try {
    const response = await fetch(`${API_URL}&q=${city}&appid=${API_KEY}`);

    if (!response.ok) {
      return {
        type: SET_ERROR,
        error: {
          message: 'Error !respone.ok',
        },
      };

      console.log(response);
    }

    const responseData: WeatherData = await response.json();

    return {
      type: GET_WEATHER,
      payload: responseData,
    };
  } catch (err) {
    console.log(err);
    return {
      type: SET_ERROR,
      payload: 'Somethink wents wrong',
    };
  }
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};
