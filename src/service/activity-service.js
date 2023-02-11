import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const activityApi = createApi({
  reducerPath: "activity",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo.api.devcode.gethired.id",
  }),
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllActivity: builder.query({
      query: () => ({
        url: "/activity-groups?email=dragdimas9@gmail.com",
        method: "GET",
      }),
    }),
    getDetailActivity: builder.query({
      query: (id) => ({
        url: `/activity-groups/${id}`,
        method: "GET",
      }),
    }),
    addActivity: builder.mutation({
      query: (body) => ({
        url: "/activity-groups?email=dragdimas9@gmail.com",
        method: "POST",
        body,
      }),
    }),
    editActivity: builder.mutation({
      query: ({ id, body }) => ({
        url: `/activity-groups/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    removeActivity: builder.mutation({
      query: (id) => ({
        url: `/activity-groups/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllActivityQuery,
  useGetDetailActivityQuery,
  useAddActivityMutation,
  useEditActivityMutation,
  useRemoveActivityMutation,
} = activityApi;

export default activityApi;
