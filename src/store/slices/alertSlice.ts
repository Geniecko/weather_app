import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: '',
  },
  reducers: {
    setAlert(state, action: PayloadAction<string>) {
      console.log(action.payload);

      state.message = action.payload;
    },
  },
});

export default alertSlice.reducer;

export const { setAlert } = alertSlice.actions;
