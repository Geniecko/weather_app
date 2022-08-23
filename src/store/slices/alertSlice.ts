import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: '',
  },
  reducers: {
    setAlert(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export default alertSlice.reducer;

export const { setAlert } = alertSlice.actions;
