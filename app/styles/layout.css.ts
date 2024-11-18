import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html body", {
  background: vars.color.bg,
  color: vars.color.text,
});
