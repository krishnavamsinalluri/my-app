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
  Deleteproblem:builder.mutation({
    query:(id)=>{
      return{
        url:`/${id}`,
        method:"DELETE"
      }
    }
  })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddProdlemMutation,
  useGetAllproblemsQuery
  ,useLazyGetAllproblemsQuery,
  useUpdateProdlemMutation,
  useDeleteproblemMutation,
  
  
} = problemApi