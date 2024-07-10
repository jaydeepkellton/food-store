import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { setLoader } from "./loader.slice";
import { MENU } from "../../constants/api-definations";
import mainApiService from "../../services";
import { Category } from "@mui/icons-material";

const initialState: any = {
  menu: [],
  category: [],
  randomMeal: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setRandomMeal: (state, action) => {
      state.randomMeal = action.payload;
    },
  },
});
export const { setMenu, setCategory, setRandomMeal } = menuSlice.actions;

export const menuList = createAsyncThunk("", async (payload, { dispatch }) => {
  dispatch(setLoader(true));
  const requestedData: any = MENU.GET_MENU();
  const data = await mainApiService(requestedData);
  dispatch(setMenu(data as any));
  dispatch(setLoader(false));
});

export const categoryList = createAsyncThunk(
  "",
  async (keyName: any, { dispatch }) => {
    dispatch(setLoader(true));
    const requestedData: any = MENU.GET_CATEGORY(keyName);
    const data = await mainApiService(requestedData);
    dispatch(setCategory(data as any));
    dispatch(setLoader(false));
  }
);

export const randomMealList = createAsyncThunk(
  "",
  async (payload, { dispatch }) => {
    dispatch(setLoader(true));
    const requestedData: any = MENU.GET_RANDOM_MEAL();
    const data = await mainApiService(requestedData);
    dispatch(setRandomMeal(data as any));
    dispatch(setLoader(false));
  }
);

const menuSelector = (state: { menu: any }) => state.menu;

export const selectMenu = createSelector(menuSelector, (state) => state.menu);

export const selectCategories = createSelector(
  menuSelector,
  (state) => state.category
);

export const selectRandomMeal = createSelector(
  menuSelector,
  (state) => state.randomMeal
);

export default menuSlice;
