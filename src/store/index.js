import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'
import countryReducer from './slices/countrySlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    country: countryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
