import { configureStore } from "@reduxjs/toolkit";
import { playerApi } from "./services/playerService";
import { newsApi } from "./services/newsService";

export const store = configureStore({
  reducer: {
    [playerApi.reducerPath]: playerApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(
      playerApi.middleware,
      newsApi.middleware
    ),
});
