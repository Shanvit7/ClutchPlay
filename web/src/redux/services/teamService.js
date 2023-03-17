import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../utils/axiosBaseQuery";

export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_NBA_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getAllTeams: builder.query({
        query: () => ({ url: `/teams?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
         method: "get" 
        }),
      }),
  }),
});

export const { useGetAllTeamsQuery } = teamApi;