import { adminQuizzesApi } from "@/api/adminQuizzes";
import { quizzesApi } from "@/api/quizzes";
import adminQuestionReducer from "@/store/adminQuestionSlice";
import questionReducer from "@/store/questionSlice";
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
