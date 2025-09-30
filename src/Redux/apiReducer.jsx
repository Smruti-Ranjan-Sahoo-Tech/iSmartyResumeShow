import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
  },
  reducers: {
    setApiData: (state, action) => {
      state.data = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setApiData } = apiSlice.actions

export default apiSlice.reducer