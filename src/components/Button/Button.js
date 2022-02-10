import styled, { css } from "styled-components";
import { myTheme } from "style";
const { fonts, colors } = myTheme;
//Button
function Button({ children, ...props }) {
  return (
    <BasicStyle type="button" {...props}>
      {children}
    </BasicStyle>
  );
}

export default Button;

//Style
const defaultStyle = css`
  box-sizing: content-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  border: none;

  :disabled {
    background-color: ${colors.m1};
    opacity: 0.7;
  }
`;

const BasicStyle = styled.button`
  ${defaultStyle};
  margin: ${(props) => props.margin || "0.4rem"};
  padding: ${(props) => props.padding || "0.8rem"};
  width: ${(props) => props.width || "6rem"};
  height: ${(props) => props.height || "1.2rem"};
  max-width: ${(props) => props.maxWidth || "120px"};
  min-width: ${(props) => props.minWidth || "45px"};
  font-family: ${(props) => props.fontFam || fonts.s};
  font-size: ${(props) => props.fontSize || "1rem"};

  background-color: ${(props) => props.bgColor || colors.m1};
  color: ${(props) => props.color || colors.bg};
`;
