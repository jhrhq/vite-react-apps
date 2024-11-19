import { quizApi } from "@/api/quiz";
import { quizzesApi } from "@/api/quizzes";
import { combineReducers } from "redux";

const reducer = combineReducers({
  [quizzesApi.reducerPath]: quizzesApi.reducer,
  [quizApi.reducerPath]: quizApi.reducer,
});

export default reducer;
