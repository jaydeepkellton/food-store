import React, { Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PAGES_ROUTES } from "../constants/pages-routes";
import Loader from "../components/shared/Loader";
import DefaultLayout from "../layouts/DefaultLayout";

const ErrorFound = React.lazy(() => import("../pages/Erros/500"));
const InternalServerErrorComponent = React.lazy(
  () => import("../pages/InternalServerError")
);
const Home = React.lazy(() => import("../pages/Home"));
const Menu = React.lazy(() => import("../pages/Menu"));
const MyFavourites = React.lazy(() => import("../pages/MyFavourites"));
const RandomMeal = React.lazy(() => import("../pages/RandomMeal"));
const AboutMe = React.lazy(() => import("../pages/AboutMe"));
const Category = React.lazy(() => import("../components/Category"));

const {
  AboutMePage,
  HomePage,
  ErrorPage,
  RootPage,
  MenuPage,
  MyFavouritesPage,
  RandomMealPage,
  CategoryPage,
} = PAGES_ROUTES;

export const routes: RouteObject[] = [
  {
    path: ErrorPage,
    element: (
      <Suspense fallback={<Loader />}>
        <InternalServerErrorComponent />
      </Suspense>
    ),
  },
  {
    path: RootPage,
    element: <DefaultLayout />,
    errorElement: <ErrorFound />,
    children: [
      {
        path: HomePage,
        element: <Home />,
      },
      {
        path: MenuPage,
        element: <Menu />,
      },
      {
        path: MyFavouritesPage,
        element: <MyFavourites />,
      },
      {
        path: RandomMealPage,
        element: <RandomMeal />,
      },
      {
        path: AboutMePage,
        element: <AboutMe />,
      },
      {
        path: CategoryPage,
        element: <Category />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
