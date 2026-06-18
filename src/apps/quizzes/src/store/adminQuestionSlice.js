// slices/questionsSlice.js
import { adminQuizzesApi } from "@/api/adminQuizzes";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the question navigation
const initialState = {
  questions: [],
  question: null,
};

const adminQuestionSlice = createSlice({
  name: "adminQuestions",
  initialState,
  reducers: {
    setAdminQuestions: (state, action) => {
      state.questions = action.payload; // Set the questions in the state
    },
    setAdminCurrentQuestion: (state, action) => {
      state.question = action.payload
        ? state.questions.Questions.find((q) => q.id == action.payload)
        : null; // Set the questions in the state
    },
    // setAnswer: (state, action) => {
    //   const { questionId, option } = action.payload;
    //   state.answers[questionId] = option; // Set the selected answer for the question
    // },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      adminQuizzesApi.endpoints.getAdminQuizzes.matchFulfilled,
      (state, action) => {
        state.questions = action.payload;
      }
    );
  },
});

export const { setAdminQuestions, setAdminCurrentQuestion } =
  adminQuestionSlice.actions;
export default adminQuestionSlice.reducer;
