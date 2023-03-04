import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../utils/axiosBaseQuery";

export const playerApi = createApi({
  reducerPath: "playerApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_NBA_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getAllPlayers: builder.query({
      query: () => ({ url: `/players`, method: "get" }),
    }),
  }),
});

export const { useGetAllPlayersQuery } = playerApi;
