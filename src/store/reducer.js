import { quizApi } from "@/api/quiz";
import { quizzesApi } from "@/api/quizzes";
import questionReducer from "@/store/questionSlice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  [quizzesApi.reducerPath]: quizzesApi.reducer,
  [quizApi.reducerPath]: quizApi.reducer,
  question: questionReducer,
});

export default reducer;
