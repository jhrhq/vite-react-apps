import axiosBaseQuery from "@/api/base";
import { createApi } from "@reduxjs/toolkit/query/react";

export const quizzesApi = createApi({
  reducerPath: "quizzesApi",
  tagTypes: ["Quizzes"],
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => ({ url: "/api/quizzes" }),
    }),
  }),
});

export const { useGetQuizzesQuery } = quizzesApi;
