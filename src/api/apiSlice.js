import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

export const apiSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getTopNews: builder.query({
      query: (country) => `top-headlines?country=${country}&apiKey=${API_KEY}`,
    }),
    searchNews: builder.mutation({
      query: ({ code, query }) =>
        `top-headlines?country=${code}&q=${query}&apiKey=${API_KEY}`,
    }),
  }),
})

export const { useGetTopNewsQuery, useSearchNewsMutation } = apiSlice
