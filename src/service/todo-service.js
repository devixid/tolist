import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoApi = createApi({
  reducerPath: "todo",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo.api.devcode.gethired.id",
  }),
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: (activity_id) => ({
        url: `/todo-items?activity_group_id=${activity_id}`,
        method: "GET",
      }),
    }),
    createTodo: builder.mutation({
      query: (body) => ({
        url: "/todo-items",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllTodoQuery, useCreateTodoMutation } = todoApi;

export default todoApi;
