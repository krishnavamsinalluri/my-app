// Need to use the React-specific entry point to import createApi
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/products' }),
  endpoints: (builder) => ({
    getAllProductsByName: builder.query({
      query: () => `/`,
    }),
    getProductsById:builder.query({
      query:(id)=>`/${id}`,
    
    }),  
   
    updateproduct:builder.mutation({
      query:(product)=>{
        return {
          url:`/${product.id}`,
          method:'put',
          body:product
        }
      }
    })
    
 }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const{useGetAllProductsByNameQuery,useUpdateproductMutation,useGetProductsByIdQuery}=productApi
