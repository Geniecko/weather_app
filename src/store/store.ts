import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './slices/alertSlice';
import weatherSlice from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    alert: alertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
