// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slice/CounterSlice'
import userReducer from '../Slice/AsyncSlice'
import PageReducer from '../Slice/Page404Slice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    page404: PageReducer,
  },
})
