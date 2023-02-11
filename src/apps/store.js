import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { TodoReducers } from "@/service";

const reducers = combineReducers({
  [TodoReducers.reducerPath]: TodoReducers.reducer,
});

const createStore = (options) =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware().concat(TodoReducers.middleware),
    ],
    devTools: process.env.NODE_ENV !== "production",
    ...options,
  });

export const store = createStore();
