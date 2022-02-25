//-----import 외부
import styled, { css } from "styled-components";
//----import 내부
import { myTheme } from "style/index";

//----메인 재사용가능한 버튼 컴포넌트
function Button({ children, ...props }) {
  return (
    <BasicStyle type="button" {...props}>
      {children}
    </BasicStyle>
  );
}

export default Button;

//-----스타일
const { fonts, colors } = myTheme;
const defaultStyle = css`
  box-sizing: content-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  border: none;
  &:hover {
    opacity: 0.8;
  }
  :disabled {
    background-color: gray;
    opacity: 0.5;
  }
`;

const BasicStyle = styled.button`
  ${defaultStyle};
  & + & {
    border-left: ${(props) => props.bdLeft || ""};
  }

  margin: ${(props) => props.margin || "0.4rem"};

  padding: ${(props) => props.padding || "0.5rem"};
  width: ${(props) => props.width || "5rem"};
  height: ${(props) => props.height || "1.2rem"};
  max-width: ${(props) => props.maxWidth || "120px"};
  min-width: ${(props) => props.minWidth || "45px"};

  font-family: ${(props) => props.fontFam || fonts.s};
  font-size: ${(props) => props.fontSize || "1rem"};

  background-color: ${(props) => props.bgColor || colors.m1};
  color: ${(props) => props.color || colors.bg};
`;
