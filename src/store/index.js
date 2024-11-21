import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

import { quizzesApi } from "@/api/quizzes";
import rootReducer from "@/store/reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([quizzesApi.middleware]),
});
const persister = persistStore(store);

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { dispatch, persister, store, useDispatch, useSelector };
