import axiosBaseQuery from "@/api/base";
import { createApi } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  tagTypes: ["Quiz"],
  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    getQuiz: builder.query({
      query: (quizId) => ({
        url: `/api/quizzes/${quizId}`,
      }),
      transformResponse: (res) => {
        return res.data;
      },
    }),
  }),
});

export const { useGetQuizQuery } = quizApi;
