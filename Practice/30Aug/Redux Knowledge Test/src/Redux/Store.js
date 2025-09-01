import { configureStore } from '@reduxjs/toolkit'
import countReducer from './Slice'

export default configureStore({
  reducer: {
    counter: countReducer,
  },
})
