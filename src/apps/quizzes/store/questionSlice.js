// slices/questionsSlice.js
import { quizzesApi } from "@quizzes/api/quizzes";
import { createSlice } from "@reduxjs/toolkit";

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
};

// Define the initial state for the question navigation
const initialState = {
  currentIndex: 0,
  questions: [],
  participation: 0,
  remaining: 0,
  answers: {},
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload; // Set the questions in the state
      state.currentIndex = 0; // Reset to first question when new questions are loaded
    },
    setAnswer: (state, action) => {
      const { questionId, option } = action.payload;
      state.answers[questionId] = option; // Set the selected answer for the question
    },
    setShuffleOptions: (state) => {
      state.questions = state.questions.map((question) => ({
        ...question,
        options: shuffleArray(question.options), // Shuffle options for each question
      }));
    },
    nextQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1; // Go to next question
      }
    },
    previousQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1; // Go to previous question
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      quizzesApi.endpoints.getQuestions.matchFulfilled,
      (state, action) => {
        state.questions = action.payload;
        state.currentIndex = 0; // Reset to the first question
      }
    );
  },
});

export const {
  setQuestions,
  nextQuestion,
  previousQuestion,
  setAnswer,
  setShuffleOptions,
} = questionsSlice.actions;
export default questionsSlice.reducer;
