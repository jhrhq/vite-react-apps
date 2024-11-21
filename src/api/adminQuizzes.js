import axiosBaseQuery from "@/api/base";
import { createApi } from "@reduxjs/toolkit/query/react";

export const adminQuizzesApi = createApi({
  reducerPath: "adminQuizzesApi",
  tagTypes: ["Quizzes"],
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAdminQuizzes: builder.query({
      query: () => ({ url: "/api/admin/quizzes" }),
      //   transformResponse: (res) => {
      //     return res.data;
      //   },
    }),

    submitQuiz: builder.mutation({
      query: ({ answers, quizId }) => {
        return {
          url: `/api/quizzes/${quizId}/attempt`,
          method: "POST",
          data: { answers },
        };
      },
    }),
  }),
});

export const { useGetAdminQuizzesQuery } = adminQuizzesApi;
