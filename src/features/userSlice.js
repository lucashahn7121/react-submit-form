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
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfoChange: {
      reducer: (state, action) => {
        return { ...state, ...action.payload };
      }
    },
  }
});

export const { userInfoChange } = userSlice.actions;

export default userSlice.reducer;