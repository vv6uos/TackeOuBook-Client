import styled, { css } from "styled-components";

import Theme from "style/theme";
const { colors, fonts } = Theme;

//Button
function Button({ children, onClick, ...props }) {
  return (
    <BasicStyle type="button" onClick={onClick} {...props}>
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
  padding: 0.8rem;
  margin: 0.4rem;
  cursor: pointer;

  border: none;

  :disabled {
    background-color: ${colors.l2}
    opacity: 0.7;
  }
`;

const BasicStyle = styled.button`
  ${defaultStyle};
  width: ${(props) => props.width || "8rem"};
  max-width: ${(props) => props.maxWidth || "120px"};
  min-width: ${(props) => props.minWidth || "45px"};
  font-family: ${(props) => props.fontFam || fonts.s};
  font-size: ${(props) => props.fontSize || "1.2rem"};

  background-color: ${(props) => props.bgColor || colors.m2};
  color: ${(props) => props.color || colors.l2};
`;
