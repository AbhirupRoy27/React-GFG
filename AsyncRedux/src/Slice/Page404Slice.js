import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const page404 = createAsyncThunk(
  'page/notFound',
  async (url, { rejectWithValue }) => {
    try {
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} - ${res.statusText}`)
      }

      const blob = await res.blob()
      return URL.createObjectURL(blob)
    } catch (err) {
      return rejectWithValue('Image Not Found - ' + err.message)
    }
  }
)

const Page404Slice = createSlice({
  name: 'page404',
  initialState: { src: null, err: null, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(page404.pending, (state) => {
        state.status = 'loading'
        state.err = null
        state.src = null
      })
      .addCase(page404.fulfilled, (state, action) => {
        state.src = action.payload
        state.status = 'fulfilled'
      })
      .addCase(page404.rejected, (state, action) => {
        state.err = action.payload
        state.status = 'failed'
      })
  },
})

export default Page404Slice.reducer
