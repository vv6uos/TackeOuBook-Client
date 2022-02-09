import styled, { css } from "styled-components";

//내부
import { myTheme } from "style/index";

export default function InputWithLabel({
  children,
  flexDirection,
  labelWidth,
  itemHeight,
  InvalidMessage,
  inputWidth,

  ...rest
}) {
  return (
    <Item flexDirection={flexDirection} itemHeight={itemHeight}>
      <Label labelWidth={labelWidth}>{children}</Label>
      <Input inputWidth={inputWidth} {...rest} />
      <Message>{InvalidMessage}</Message>
    </Item>
  );
}

const { fonts, colors, fontStyles } = myTheme;

const Item = styled.div`
  display: flex;
  flex-direction: ${(p) => p.flexDirection || "row"};
  height: ${(p) => p.itemHeight || "2rem"};
  max-width: 300px;
  margin-bottom: 0.5rem;
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
  font-size: 1rem;
  height: 2rem;
`;

const Message = styled.div`
  font-size: 1rem;
  color: ${colors.m2};
`;
