import styled, { css } from "styled-components";
import { useState } from "react";

export default function InputWithLabel({
  children,
  flexDirection,
  labelWidth,
  itemHeight,

  ...rest
}) {
  const [mode, setMode] = useState("default");

  function onChangeMode() {
    setMode("confirm");
  }
  return (
    <Item flexDirection={flexDirection} itemHeight={itemHeight}>
      <Label labelWidth={labelWidth} itemHeight>
        {children}
      </Label>
      <Input $invalidmode={mode} onKeyUp={onChangeMode} {...rest} />
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  flex-direction: ${(p) => p.flexDirection || "row"};
  height: ${(p) => p.itemHeight || "2rem"};
  font-size: 1.2rem;
  max-width: 300px;
  margin: 0.6rem;
  }
`;

const Label = styled.label`
  width: ${(p) => p.labelWidth || "6.6rem"};
  min-width: 60px;
  color: gray;
  line-height: 2rem;
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline-style: none;
  border: none;
  width: ${(p) => p.inputWidth || "13.3rem"};
  font-size: 1rem;
  height: 2rem;

  :invalid {
    ${(p) => {
      switch (p.$invalidmode) {
        case "confirm":
          return css`
            border: 1px solid red;
          `;
        default:
          return css`
            border: none;
          `;
      }
    }}
  }
`;
