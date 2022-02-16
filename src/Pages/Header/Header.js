import styled from "styled-components";
import Theme from "../../style/theme";
import MenuButton from "./Button_menu";

import MemberNav from "./Nav_member";
import DefaultNav from "./Nav_default";
import { Logo } from "components";

function Header({ isMember }) {
  return (
    <HeaderBox>
      <MenuBox>
        <MenuButton moveTo="/login">로그인</MenuButton>
        <MenuButton moveTo="/" onClick={window.sessionStorage.clear()}>
          로그아웃
        </MenuButton>
        <MenuButton moveTo="/upload">업로드</MenuButton>
        <MenuButton moveTo="/register">회원가입</MenuButton>
        <MenuButton moveTo="/test">테스트</MenuButton>
        <MenuButton
          onClick={() => {
            console.log("메뉴버튼 테스트중");
          }}
        >
          네비테스트중
        </MenuButton>
        <MenuButton moveTo="/test">내정보</MenuButton>
      </MenuBox>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Nav>{isMember.logged ? <MemberNav /> : <DefaultNav />}</Nav>
    </HeaderBox>
  );
}

export default Header;

const { colors } = Theme;

const HeaderBox = styled.div`
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${colors.m1};
`;

const MenuBox = styled.div`
  display: flex;
`;

const Nav = styled.div`
  height: 2rem;
  background-color: white;
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  justify-content: flex-end;
`;
