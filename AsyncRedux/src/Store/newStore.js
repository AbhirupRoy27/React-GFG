// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slice/CounterSlice'
import userReducer from '../Slice/AsyncSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})
