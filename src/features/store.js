import { configureStore } from '@reduxjs/toolkit'
import errorSlice from './errorSlice'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    error: errorSlice,
  },
})
