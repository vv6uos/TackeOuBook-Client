import styled from "styled-components";

import { Logo, Modal, SubscribePop } from "components";
import { myTheme } from "style";
import { MemberNav, DefaultNav } from "./Navigations/index";
import { MenuButton } from "./Navigations/Nav_buttons/index";
import { useState } from "react";

function Header({ isMember }) {
  const [pop, setPop] = useState(false);
  const onClosePop = () => {
    setPop(false);
  };

  return (
    <HeaderBox>
      {pop && (
        <Modal
          title="구독"
          open={pop}
          close={onClosePop}
          content={<SubscribePop close={onClosePop} />}
        />
      )}
      <MenuBox>
        <MenuButton moveTo="/upload">업로드</MenuButton>
        <MenuButton moveTo="/test">테스트</MenuButton>
        <MenuButton moveTo="/mypage">내정보</MenuButton>
      </MenuBox>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      {isMember.logged ? (
        <MemberNav setPop={setPop} isMember={isMember} />
      ) : (
        <DefaultNav setPop={setPop} />
      )}
    </HeaderBox>
  );
}

export default Header;

const { colors } = myTheme;

const HeaderBox = styled.div`
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${colors.m1};
`;

const MenuBox = styled.div`
  display: flex;
`;

const Nav = styled.div`
  height: 4rem;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  justify-content: flex-end;
`;
