// Need to use the React-specific entry point to import createApi
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/products' }),
  endpoints: (builder) => ({
    getAllProductsByName: builder.query({
      query: () => `/`,
    }),
    
 }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export{useget}=productApi
