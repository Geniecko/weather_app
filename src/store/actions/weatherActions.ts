import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from '../../api/data';
import { SetErrorAction, WeatherData } from '../types';

export const getWeather = createAsyncThunk<WeatherData, string, { rejectValue: SetErrorAction }>(
  'weather/get',
  async (city: string, thunkApi) => {
    const response = await fetch(`${API_URL}&q=${city}&appid=${API_KEY}`);

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        error: {
          cod: `${response.status}`,
          message: `${response.statusText} -> Failed to fetch weather.`,
        },
      });
    }

    const responseData: WeatherData = await response.json();
    
    return responseData;
  },
);
