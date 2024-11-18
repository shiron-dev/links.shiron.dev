import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html, body", {
  color: vars.color.text,
  fontFamily: vars.typography.fontFamily.roboto,
  margin: 0,
  padding: 0,
  width: "1440px",
  maxWidth: "1440px",
  minWidth: "1440px",
});
