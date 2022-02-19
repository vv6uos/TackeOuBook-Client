import styled from "styled-components";

//내부
import { myTheme } from "style/index";

export default function InputWithLabel({
  children,
  flexDirection,
  labelWidth,
  itemHeight,
  inputWidth,
  inputHeight,

  ...rest
}) {
  return (
    <Item flexDirection={flexDirection} itemHeight={itemHeight}>
      <Label labelWidth={labelWidth}>{children}</Label>
      <Input inputHeight={inputHeight} inputWidth={inputWidth} {...rest} />
    </Item>
  );
}

const { fonts, colors } = myTheme;

const Item = styled.div`
  display: flex;
  flex-direction: ${(p) => p.flexDirection || "row"};
  height: ${(p) => p.itemHeight || "3rem"};
  max-width: 400px;
 
}
`;

const Label = styled.label`
  width: ${(p) => p.labelWidth || "6.6rem"};
  min-width: 60px;
  color: gray;
  line-height: 2rem;
  font-family: ${fonts.m};
  font-size: 1.2rem;
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline-style: none;
  border: 0.5px solid ${colors.d1};
  width: ${(p) => p.inputWidth || "13.3rem"};
  height: ${(p) => p.inputHeight || "2.2rem"};
  font-size: 1.2rem;
`;
