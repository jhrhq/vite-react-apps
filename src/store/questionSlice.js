// src/features/questionsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedQuestionId: null, // Store the selected question's id
  currentIndex: 0, // Track the current question index
};

const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    selectQuestion: (state, action) => {
      state.selectedQuestionId = action.payload;
    },
    nextQuestion: (state, action) => {
      state.currentIndex += 1;
      state.selectedQuestionId = null; // Reset selected question after moving to the next question
    },
  },
});

export const { selectQuestion, nextQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;
