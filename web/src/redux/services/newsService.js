import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../utils/axiosBaseQuery";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_NBA_NEWS_API_URL,
  }),
  endpoints: (builder) => ({
    getPlayerNews: builder.query({
      query: () => ({
        url: `everything?q=National Basketball Association Players&apiKey=${
          import.meta.env.VITE_NBA_NEWS_API_KEY
        }`,
        method: "get",
      }),
    }),
  }),
});

export const { useGetPlayerNewsQuery } = newsApi;
