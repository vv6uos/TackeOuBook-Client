import styled from "styled-components";
import Theme from "../../style/theme";

const { colors, fonts } = Theme;
const Box = styled.label`
  display: flex;
  height: 2rem;
  font-size: 1.2rem;
  margin: 0.5rem;
  max-width: 300px;
`;

const Label = styled.label`
  width: 6.6rem;
  min-width: 60px;
  color: gray;
  line-height: 2rem;
`;

const InputBlock = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline-style: none;
  border: none;
  width: 13.3rem;
  font-size: 0.8rem;
`;

export default function Input({ children, placeholder, type }) {
  return (
    <Box>
      <Label>{children}</Label>
      <InputBlock placeholder={placeholder} type={type} />
    </Box>
  );
}
