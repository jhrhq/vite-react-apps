import { quizzesApi } from "@/api/quizzes";
import questionReducer from "@/store/questionSlice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  [quizzesApi.reducerPath]: quizzesApi.reducer,
  questions: questionReducer,
});

export default reducer;
