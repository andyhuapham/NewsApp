import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  country: { code: 'us', name: 'United States' },
}
export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload
    },
  },
})

export const { changeCountry } = countrySlice.actions

export default countrySlice.reducer
