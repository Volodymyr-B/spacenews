import { baseURL } from "./../../constants/baseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle } from "../../types/article";

interface searchArticlesParams {
  limit: number;
  search: string;
}

export const spaceFlightNewsApi = createApi({
  reducerPath: "spaceflightnews/api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (build) => ({
    searchArticles: build.query<IArticle[], searchArticlesParams>({
      query: ({ search, limit = 15 }) => ({
        url: `articles`,
        params: {
          _limit: limit,
          title_contains: search,
        },
      }),
    }),
    getArticle: build.query<IArticle, number>({
      query: (id) => ({
        url: `articles/${id}`,
      }),
    }),
  }),
});
export const { useSearchArticlesQuery, useLazyGetArticleQuery } =
  spaceFlightNewsApi;
