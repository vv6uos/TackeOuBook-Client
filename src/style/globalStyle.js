import { createGlobalStyle } from "styled-components";
import { Downloadfonts } from "./downloadFonts";

const GlobalStyle = createGlobalStyle`
    ${Downloadfonts}

  *, *::before, *::after {
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
