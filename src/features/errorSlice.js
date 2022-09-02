import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  jobTitle: '',
  reason: '',
  isError: true,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: {
      reducer: (state, action) => {
        return { ...state, ...action.payload };
      }
    },
  }
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;