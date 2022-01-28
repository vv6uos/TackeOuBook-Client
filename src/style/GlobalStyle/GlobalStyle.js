import { createGlobalStyle } from "styled-components";
import { downloadfonts } from "./downloadFonts";

const GlobalStyle = createGlobalStyle`
    ${downloadfonts}

  *, *::before, *::after {
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
