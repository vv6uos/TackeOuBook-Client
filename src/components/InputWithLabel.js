import styled from "styled-components";

export default function InputWithLabel({ children, ...rest }) {
  return (
    <Box>
      <Label>{children}</Label>
      <Input {...rest} />
    </Box>
  );
}

const Box = styled.label`
  display: flex;
  height: 2rem;
  font-size: 1.2rem;
  max-width: 300px;

  & + & {
    margin: 0.5rem;
  }
`;

const Label = styled.label`
  width: 6.6rem;
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
  width: 13.3rem;
  font-size: 1rem;
`;
