import { combineReducers } from "@reduxjs/toolkit";
import loaderSlice from "../slice/loader.slice";
import menuSlice from "../slice/menu.slice";

export const rootReducer = combineReducers({
  [loaderSlice.name]: loaderSlice.reducer,
  [menuSlice.name]: menuSlice.reducer,
});
