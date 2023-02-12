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
    getTodoDetail: builder.mutation({
      query: (id) => ({
        url: `/todo-items/${id}`,
        method: "GET",
      }),
    }),
    updateTodo: builder.mutation({
      query: (body) => ({
        url: `/todo-items/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todo-items/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  useCreateTodoMutation,
  useGetTodoDetailMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;

export default todoApi;
