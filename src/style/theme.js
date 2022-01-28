import { css } from "styled-components";

const colors = {
  c1: "white",
  c2: "rgb(236, 236, 236)",
  c3: "palevioletred",
  c4: "rgba(29, 15, 25, 0.925)",
};

const fonts = {
  l: "GmarketSansBold",
  m: "GmarketSansMedium",
  s: "GmarketSansLight",
};

const fontStyles = {
  mainTitle: css`
    font-family: ${fonts.l};
    color: ${colors.c4};
    font-size: 2rem;
  `,
  semiTitle: css`
    font-family: ${fonts.m};
    color: ${colors.c4};
    font-size: 1.5rem;
  `,
  body: css`
    font-family: ${fonts.s};
    color: ${colors.c4};
    font-size: 1rem;
  `,
  mini: css`
    font-family: ${fonts.s};
    color: gray;
    font-size: 0.6rem;
  `,
};

const myTheme = { colors, fonts, fontStyles };

export default myTheme;
