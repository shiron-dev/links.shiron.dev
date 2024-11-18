import { globalStyle, style } from "@vanilla-extract/css";

export const snsCard = style({
  "display": "flex",
  ":link": {
    color: "black",
    textDecoration: "none",
  },
  ":visited": {
    color: "black",
    textDecoration: "none",
  },
  ":hover": {
    color: "black",
    textDecoration: "none",
  },
  ":active": {
    color: "black",
    textDecoration: "none",
  },
});

globalStyle(`${snsCard} > *`, {
  margin: "0 0.5rem",
});

globalStyle(`${snsCard} > div`, {
  alignSelf: "center",
});

export const snsName = style({
  fontSize: "1.5rem",
});

export const userName = style({
  fontSize: "1rem",
  marginLeft: "0.5rem",
});
