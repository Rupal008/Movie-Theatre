import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import { useReducer } from "react";
import { userSlice } from "./movies/movieSlice";
import { userSlice1 } from "./movies/movieSlice";

const rootReducer = combineReducers({
  list: userSlice.reducer,
  list1: userSlice1.reducer,
  movies: moviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
