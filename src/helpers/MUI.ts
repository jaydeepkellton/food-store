import { createTheme } from "@mui/material";

export const MUITheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1F66A8",
      },
      secondary: {
        main: "#F5FAFF",
      },
      error: {
        main: "#D4351C",
      },
      warning: {
        main: "#cc8f00",
      },
      info: {
        main: "#ffffff",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => {
            switch (ownerState.color) {
              case "primary":
                return {
                  "&.Mui-disabled": {
                    background:
                      ownerState.variant === "outlined" ? "#FFFFF" : "#1F66A8",
                    opacity: 0.45,
                    color:
                      ownerState.variant === "outlined" ? "#1F66A8" : "#FFFFFF",
                    border: "1px solid #1F66A8",
                  },
                };
              case "secondary":
                return {
                  "&.Mui-disabled": {
                    background:
                      ownerState.variant === "outlined" ? "#FFFFFF" : "#B1B4B6",
                    opacity: 0.45,
                    color:
                      ownerState.variant === "outlined" ? "#B1B4B6" : "#FFFFFF",
                    border: "1px solid #B1B4B6",
                  },
                };
              case "error":
                return {
                  "&.Mui-disabled": {
                    background:
                      ownerState.variant === "outlined" ? "#FFFFFF" : "#D4351C",
                    opacity: 0.45,
                    color:
                      ownerState.variant === "outlined" ? "#D4351C" : "#FFFFFF",
                    border: "1px solid #D4351C",
                  },
                };
              case "warning":
                return {
                  "&.MuiButton-root": {
                    color: "#fff",
                    "&.Mui-disabled": {
                      background:
                        ownerState.variant === "outlined"
                          ? "#FFFFFF"
                          : "#cc8f00",
                      opacity: 0.45,
                      color:
                        ownerState.variant === "outlined"
                          ? "#cc8f00"
                          : "#FFFFFF",
                      border: "1px solid #cc8f00",
                    },
                  },
                };
              case "info":
                return {
                  "&.MuiButton-root": {
                    color: "#1F66A8",
                    background: "#FFFFFF",
                    "&.Mui-disabled": {
                      background:
                        ownerState.variant === "outlined"
                          ? "transparent"
                          : "#FFFFFF",
                      opacity: 0.45,
                      color:
                        ownerState.variant === "outlined"
                          ? "#FFFFFF"
                          : "#1F66A8",
                      border: "1px solid #FFFFFF",
                    },
                  },
                };
              default:
                return;
            }
          },
        },
      },
    },
  });

  return theme;
};
