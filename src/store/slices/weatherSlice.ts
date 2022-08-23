import { createSlice } from '@reduxjs/toolkit';
import { getWeather } from '../actions/weatherActions';
import { WeatherState } from '../types';

const initialState: WeatherState = {
  data: null,
  loading: false,
  status: 'idle',
  error: {
    cod: '',
    message: '',
  },
};

const weatherSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.pending, (state) => {
      state.loading = true;
      state.status = 'loading';
      state.error.message = '';
      state.error.cod = '';
    });
    builder.addCase(getWeather.rejected, (state, { payload }) => {
      if (payload === undefined) {
        state.loading = false;
        state.status = 'rejected';
        state.error = {
          cod: 'unknown',
          message: 'Something went wrong',
        };
      } else {
        state.loading = false;
        state.status = 'rejected';
        state.error = {
          cod: payload.error.cod,
          message: payload.error.message,
        };
      }
    });
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      if (payload === undefined) {
        state.status = 'ok';
        state.data = null;
        state.loading = false;
        state.error.message = '';
        state.error.cod = '';
      } else {
        state.status = 'ok';
        state.loading = false;
        state.data = payload;
        state.error.message = '';
        state.error.cod = '';
      }
    });
  },
});

export default weatherSlice.reducer;
