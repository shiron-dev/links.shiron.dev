import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    text: "",
    tileBg: "",
    bg: "",
  },
  typography: {
    fontFamily: {
      roboto: "",
    },
  },
});

createGlobalTheme(":root", vars, {
  color: {
    text: "#3C4063",
    tileBg: "#D9D9D9",
    bg: "#fff",
  },
  typography: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
  },
});
