//-----외부
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import React from "react";

//-----내부
import { MyLink } from "components";

import { myCSS, myTheme } from "style/index";
import { MySubscribe, MyInfos, MyRental } from "./components/index";

function MyPage() {
  return (
    <Wrapper>
      <Nav>
        <NavTitle>마이페이지</NavTitle>
        <NavItem to="/mypage/myinfo">내정보</NavItem>
        <NavItem to="/mypage/mysubscribe">구독현황</NavItem>
        <NavItem to="/mypage/myrental">대여현황</NavItem>
      </Nav>
      <Container>
        <Routes>
          <Route path={"/myinfo"} element={<MyInfos />} />
          <Route path={"/subscribe"} element={<MySubscribe />} />
          <Route path={"/rental"} element={<MyRental />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default MyPage;

const { flexColumn } = myCSS;
const { colors, fonts } = myTheme;

const Wrapper = styled.div`
  display: flex;
  min-height: inherit;

  background-color: ${colors.gray};
  @media screen and (max-width: 768px) {
    ${flexColumn};
  }
`;

const Nav = styled.div`
  ${flexColumn};
  flex-basis: 15rem;
  min-width: 12rem;

  padding: 5rem 2rem;
  background-color: ${colors.bg};
  @media screen and (max-width: 768px) {
    padding: 1rem 2rem 0rem 1.2rem;
    width: 100%;
    flex-basis: 3rem;
    flex-direction: row;
  }
`;

const NavItem = ({ children, ...props }) => {
  return (
    <MyLink margin="0.3rem 0.5rem 0 1.2rem" {...props}>
      {children}
    </MyLink>
  );
};

const NavTitle = styled.div`
  font-family: ${fonts.m};
  font-size: 1.4rem;
  margin: 0 1rem 1rem 0;
`;
const Container = styled.div``;
