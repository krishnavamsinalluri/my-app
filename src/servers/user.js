// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/user' }),
  endpoints: (builder) => ({
    getUsersByName: builder.query({
      query: (user) => `?username=${user.username}&password=${user.password}`,
    }),
    getAllMandal:builder.query({
        query:()=>{
          return `?role=Mandalleader`
        }
    }),

    AddNewuser:builder.mutation({
      query:(newuser)=>{
        return {
          url:`/`,
          method:"post",
          body:newuser
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetUsersByNameQuery,useLazyGetUsersByNameQuery,useAddNewuserMutation,useGetAllMandalQuery} = usersApi