import styled from "styled-components";
import MyLink from "./MyLink";
function Logo() {
  return (
    <MyLink to="/">
      <LogoImg alt="로고" src="https://i.imgur.com/xxx7jH6.png" />
    </MyLink>
  );
}

export default Logo;

const LogoImg = styled.img`
  height: 80%;
  margin: 1rem 1rem 0.5rem 1rem;
`;
