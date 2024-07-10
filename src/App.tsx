import { ThemeProvider } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { logger, MUITheme } from "./helpers";

function App() {
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
