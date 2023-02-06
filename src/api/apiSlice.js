import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks'
        })
    })
})


export const { useGetTasksQuery } = apiSlice