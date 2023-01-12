import { baseURL } from "./../../constants/baseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle } from "../../types/article";

export const spaceFlightNewsApi = createApi({
  reducerPath: "spaceflightnews/api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (build) => ({
    searchArticles: build.query<IArticle[], string>({
      query: (search: string) => ({
        url: `?title_contains=${search}`,
      }),
    }),
  }),
});
export const { useSearchArticlesQuery } = spaceFlightNewsApi;
