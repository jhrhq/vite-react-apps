import axiosBaseQuery from "@/api/base";
import { createApi } from "@reduxjs/toolkit/query/react";

export const quizzesApi = createApi({
  reducerPath: "quizzesApi",
  tagTypes: ["Quizzes"],
  keepUnusedDataFor: 30,
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => ({ url: "/api/quizzes" }),
    }),
    getQuestions: builder.query({
      query: (quizId) => ({
        url: `/api/quizzes/${quizId}`,
      }),
      transformResponse: (res) => {
        return res.data;
      },
    }),
    getQuizAttempts: builder.query({
      query: (quizId) => ({
        url: `/api/quizzes/${quizId}/attempts`,
      }),
      transformResponse: (res) => {
        return res.data;
      },
    }),

    submitQuiz: builder.mutation({
      query: ({ answers, quizId }) => {
        return {
          url: `/api/quizzes/${quizId}/attempt`,
          method: "POST",
          data: { answers },
        };
      },
      onSuccess: (data, { dispatch, getState, extra }) => {
        extra.navigate("/result");
      },
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuestionsQuery,
  useGetQuizAttemptsQuery,
  useSubmitQuizMutation,
} = quizzesApi;
