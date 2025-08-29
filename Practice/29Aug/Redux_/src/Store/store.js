import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slice/slice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
