import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "6rem",
  minHeight: "100vh",
});

export const card = style({
  margin: "1rem 0",
});
