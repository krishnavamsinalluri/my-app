// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const problemApi = createApi({
  reducerPath: 'problemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/problem' }),
  endpoints: (builder) => ({
    getAllproblems:builder.query({
        query:()=>`/`,
    }),
    getMandadID:builder.query({
      query:(mandalId)=>`/${mandalId}`,
    
    }),  
    addProdlem:builder.mutation({
        query:(problem)=>{
            return{
                url:`/`,
                method:"post",
                body:problem
            }
        }
    }),
    UpdateProdlem:builder.mutation({
      query:(problem)=>{
          return{
              url:`/${problem.id}`,
              method:"put",
              body:problem
          }
      }
  }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useAddProdlemMutation,useGetAllproblemsQuery,useLazyGetAllproblemsQuery,useUpdateProdlemMutation,useGetMandadIDQuery} = problemApi