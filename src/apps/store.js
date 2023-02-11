import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { ActivityReducers, TodoReducers } from "@/service";

const reducers = combineReducers({
  [ActivityReducers.reducerPath]: ActivityReducers.reducer,
  [TodoReducers.reducerPath]: TodoReducers.reducer,
});

const createStore = (options) =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => [
      // ...getDefaultMiddleware().concat(ActivityReducers.middleware),
      ...getDefaultMiddleware(),
      ActivityReducers.middleware,
      TodoReducers.middleware,
    ],
    devTools: process.env.NODE_ENV !== "production",
    ...options,
  });

export const store = createStore();
