import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = '14c2529eb4498c5d1ffd6915d05bf58a91bdda796af59f41d480d11c099d0479'

interface Payload {
  id: string
  name: string
  image: {
    url: string
  }
}

interface Args {
  limit?: number
}

export const dogsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.thedogapi.com/v1',
    headers: { 'x-api-key': DOGS_API_KEY },
  }),
  keepUnusedDataFor: 5,
  endpoints: (builder) => ({
    fetchBreeds: builder.query<Array<Payload>, Args>({
      query: ({ limit = 10 }) => ({
        url: `/breeds?limit=${limit}`,
      })
    })
  })
})

export const { useFetchBreedsQuery } = dogsApi
