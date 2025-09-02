import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  // This 'userId' argument comes directly from what you pass in `dispatch(fetchUserById(userIdInput))`
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      )
      if (!response.ok) {
        throw new Error('User not found or server error!')
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  entity: null,
  status: 'idle',
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.entity = action.payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export default userSlice.reducer
