// Define an enum for page names
export enum PageNames {
  Root = "Root",

  Home = "Home",
  Menu = "Menu",
  MyFavourites = "My Favourites",
  RandomMeal = "RandomMeal",
  AboutMe = "About Me",

  NotFound = "NotFound",
  ErrorPage = "ErrorPage",
  AccessDenied = "AccessDenied",
  AuthValidate = "AuthValidate",
  InternalServerError = "InternalServerError",
}

// Define a type for page URLs
export type PageURLs = Record<PageNames, string>;

// Define your page URLs
export const PAGE_URL: PageURLs = {
  [PageNames.Root]: "/",

  [PageNames.AuthValidate]: "/login",

  [PageNames.Home]: "/home",
  [PageNames.Menu]: "/menu",
  [PageNames.MyFavourites]: "/my-favourites",
  [PageNames.RandomMeal]: "/random-meal",
  [PageNames.AboutMe]: "/about-me",

  [PageNames.ErrorPage]: "/error",
  [PageNames.NotFound]: "/not-found",
  [PageNames.AccessDenied]: "/access-denied",
  [PageNames.InternalServerError]: "/internal-server-error",
};
