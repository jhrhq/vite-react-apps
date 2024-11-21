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

    createQuiz: builder.mutation({
      query: (data) => {
        return {
          url: `/api/admin/quizzes/`,
          method: "POST",
          data,
        };
      },
    }),
  }),
});

export const { useGetAdminQuizzesQuery, useCreateQuizMutation } =
  adminQuizzesApi;
