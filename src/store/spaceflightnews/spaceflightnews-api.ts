import { baseURL } from "./../../constants/baseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spaceFlightNewsApi = createApi({
  reducerPath: "spaceflightnews/api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (build) => ({
    searchArticles: build.query<any, string>({
      query: (search: string) => ({
        url: `?summary_contains=${search}`,
      }),
    }),
  }),
});
export const { useSearchArticlesQuery } = spaceFlightNewsApi;
