import { css } from "styled-components";

const colors = {
  c1: "white",
  c2: "gray",
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
  `,
  semiTitle: css`
    font-family: ${fonts.m};
    color: ${colors.c4};
    font-size: 1.2rem;
  `,
  body: css`
    font-family: ${fonts.s};
    color: ${colors.c4};
    font-size: 1.2rem;
  `,
};

const Theme = { colors, fonts, fontStyles };

export default Theme;
