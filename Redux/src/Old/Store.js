import { configureStore } from '@reduxjs/toolkit'

// simple reducer for count (Old Method)
function counterReducer(state = { val: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { val: state.val + 1 }
    default:
      return state
  }
}

// create store with reducer
const storeA = configureStore({
  reducer: counterReducer,
})

export default storeA
