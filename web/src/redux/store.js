import { configureStore } from "@reduxjs/toolkit";
import { playerApi } from "./services/playerService";

export const store = configureStore({
  reducer: {
    [playerApi.reducerPath]: playerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(playerApi.middleware),
});
