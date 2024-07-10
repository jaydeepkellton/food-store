import { ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { logger, MUITheme } from "./helpers";

function App() {
  const state = useSelector((s: any) => s.alert);
  logger.info("Env: ", process.env.REACT_APP_ENV);

  return (
    <>
      <ThemeProvider theme={MUITheme()}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default React.memo(App);
