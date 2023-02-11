import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo.api.devcode.gethired.id",
  }),
  endpoints: (builder) => ({
    getAllActivity: builder.query({
      url: "activity-groups?email=dragdimas9@gmail.com",
      method: "GET",
    }),
    addActivity: builder.mutation({
      url: "activity-groups?email=dragdimas9@gmail.com",
      method: "POST",
    }),
    editActivity: builder.mutation({
      url: "activity-groups?email=dragdimas9@gmail.com",
      method: "PATCH",
    }),
    removeActivity: builder.query({
      url: "activity-groups?email=dragdimas9@gmail.com",
      method: "POST",
    }),
  }),
});

export const {
  useGetAllActivityQuery,
  useAddActivityMutation,
  useEditActivityMutation,
  useRemoeActivityMutation,
} = todoApi;

export default todoApi;
