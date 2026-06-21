import { adminQuizzesApi } from "@quizzes/api/adminQuizzes";
import { quizzesApi } from "@quizzes/api/quizzes";
import adminQuestionReducer from "@quizzes/store/adminQuestionSlice";
import questionReducer from "@quizzes/store/questionSlice";
import { combineReducers } from "@reduxjs/toolkit";
import reduxRememberSlice from "./reduxRememberSlice";

const reducer = combineReducers({
  [quizzesApi.reducerPath]: quizzesApi.reducer,
  [adminQuizzesApi.reducerPath]: adminQuizzesApi.reducer,
  questions: questionReducer,
  adminQuestions: adminQuestionReducer,
  reduxRemember: reduxRememberSlice.reducer

});

export default reducer;
