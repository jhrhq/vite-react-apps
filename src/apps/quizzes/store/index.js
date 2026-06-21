import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

import { adminQuizzesApi } from "@quizzes/api/adminQuizzes";
import { quizzesApi } from "@quizzes/api/quizzes";
import rootReducer from "@quizzes/store/reducer";
import { rememberReducer, rememberEnhancer } from 'redux-remember';


const rememberedKeys = []


const store = configureStore({
  reducer: rememberReducer(rootReducer),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([quizzesApi.middleware, adminQuizzesApi.middleware]),

  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(rememberEnhancer(
      window.localStorage,
      rememberedKeys,
      {
        persistWholeStore: true
      }
    )),
});


const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { dispatch, store, useDispatch, useSelector };
