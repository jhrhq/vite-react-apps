import { quizzesApi } from "@/api/quizzes";
import { combineReducers } from "redux";

const reducer = combineReducers({
  [quizzesApi.reducerPath]: quizzesApi.reducer,
});

export default reducer;
