import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../api/data';
import { SetErrorAction, WeatherData } from '../types';

export const getWeather = createAsyncThunk<WeatherData, string, { rejectValue: SetErrorAction }>(
  'weather/get',
  async (city: string, thunkApi) => {
    const response = await fetch(
      `${API_URL}&q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    );

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        error: {
          cod: `${response.status}`,
          message: response.statusText,
        },
      });
    }

    const responseData: WeatherData = await response.json();

    return responseData;
  },
);
