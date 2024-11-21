import { adminQuizzesApi } from "@/api/adminQuizzes";
import { quizzesApi } from "@/api/quizzes";
import questionReducer from "@/store/questionSlice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  [quizzesApi.reducerPath]: quizzesApi.reducer,
  [adminQuizzesApi.reducerPath]: adminQuizzesApi.reducer,
  questions: questionReducer,
});

export default reducer;
