import { createSlice } from '@reduxjs/toolkit'

const namesSlice = createSlice({
  name: 'usernames',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    removeUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload)
    },
  },
})

export const { addUser, removeUser } = namesSlice.actions
export default namesSlice.reducer
