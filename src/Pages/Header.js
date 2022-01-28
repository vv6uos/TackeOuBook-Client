import styled from "styled-components";
import Theme from "../style/theme";
import MenuButton from "../components/Button/MenuButton";
import LogoButton from "../components/Button/LogoButton.js";

function Header() {
  return (
    <HeaderBox>
      <LogoButton />
      <MenuBox>
        <MenuButton moveTo="/login">로그인</MenuButton>
        <MenuButton moveTo="/upload">업로드</MenuButton>
      </MenuBox>
    </HeaderBox>
  );
}

export default Header;

const { colors } = Theme;

const HeaderBox = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.c3};
`;

const MenuBox = styled.div`
  display: flex;
`;
