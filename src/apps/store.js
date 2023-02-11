import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { ActivityReducers } from "@/service";

const reducers = combineReducers({
  [ActivityReducers.reducerPath]: ActivityReducers.reducer,
});

const createStore = (options) =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => [
      // ...getDefaultMiddleware().concat(ActivityReducers.middleware),
      ...getDefaultMiddleware(),
      ActivityReducers.middleware,
    ],
    devTools: process.env.NODE_ENV !== "production",
    ...options,
  });

export const store = createStore();
