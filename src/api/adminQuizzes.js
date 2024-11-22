import axiosBaseQuery from "@/api/base";
import { createApi } from "@reduxjs/toolkit/query/react";

export const adminQuizzesApi = createApi({
  reducerPath: "adminQuizzesApi",
  tagTypes: ["adminQuizzes"],
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAdminQuizzes: builder.query({
      query: () => ({ url: "/api/admin/quizzes" }),
      providesTags: ["adminQuizzes"],
    }),

    createQuiz: builder.mutation({
      query: (data) => {
        return {
          url: `/api/admin/quizzes/`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["adminQuizzes"],
    }),
    addQuestion: builder.mutation({
      query: ({ quizId, ...rest }) => {
        return {
          url: `/api/admin/quizzes/${quizId}/questions`,
          method: "POST",
          data: { ...rest.questionData },
        };
      },
      invalidatesTags: ["adminQuizzes"],
    }),
    updateQuiz: builder.mutation({
      query: ({ quizId, ...rest }) => {
        return {
          url: `/api/admin/quizzes/${quizId}/questions`,
          method: "PATCH",
          data: { ...rest.questionData },
        };
      },
      invalidatesTags: ["adminQuizzes"],
    }),
    updateQuestion: builder.mutation({
      query: ({ questionId, ...rest }) => {
        return {
          url: `/api/admin/questions/${questionId}`,
          method: "PATCH",
          data: { ...rest.questionData },
        };
      },
      invalidatesTags: ["adminQuizzes"],
    }),
    removeQuestion: builder.mutation({
      query: ({ quizId }) => {
        return {
          url: `/api/admin/questions/${quizId}`,
          method: "DELETE",
          // data: { ...rest.questionData },
        };
      },
      invalidatesTags: ["adminQuizzes"],
    }),
    removeQuiz: builder.mutation({
      query: ({ quizId }) => {
        return {
          url: `/api/admin/questions/${quizId}`,
          method: "DELETE",
          // data: { ...rest.questionData },
        };
      },
      invalidatesTags: ["adminQuizzes"],
    }),
  }),
});

export const {
  useGetAdminQuizzesQuery,
  useCreateQuizMutation,
  useAddQuestionMutation,
  useUpdateQuestionMutation,
  useUpdateQuizMutation,
  useRemoveQuestionMutation,
  useRemoveQuizMutation,
} = adminQuizzesApi;
