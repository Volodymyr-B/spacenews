import { configureStore } from "@reduxjs/toolkit";
import { spaceFlightNewsApi } from "./spaceflightnews/spaceflightnews-api";

export const store = configureStore({
  reducer: {
    [spaceFlightNewsApi.reducerPath]: spaceFlightNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spaceFlightNewsApi.middleware),
});
