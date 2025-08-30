import { configureStore } from '@reduxjs/toolkit'
import namesReducer from '../Slice/slice'

export default configureStore({
  reducer: {
    userNames: namesReducer,
  },
})
