import { configureStore } from "@reduxjs/toolkit";
import { playerApi } from "./services/playerService";
import { teamApi } from "./services/teamService";
export const store = configureStore({
  reducer: {
    [playerApi.reducerPath]: playerApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(
      playerApi.middleware,
      teamApi.middleware,
    ),
});
