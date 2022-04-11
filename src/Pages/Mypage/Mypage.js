//-----import 외부
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
//-----import 내부
import { myCSS, myTheme } from "style/index";
import { MyLink } from "components";
import { MySubscribe, MyInfos, MyRental } from "./components/index";

//-----메인 회원 정보를 제공하는 컴포넌트의 기본 틀
function MyPage({ user }) {
  const { id } = user;
  return (
    <Wrapper>
      <Nav>
        <NavTitle>마이페이지</NavTitle>
        <NavItem to={`/mypage/${id}/myinfo`}>내정보</NavItem>
        <NavItem to={`/mypage/${id}/mysubscribe`}>구독현황</NavItem>
        <NavItem to={`/mypage/${id}/myrental`}>대여현황</NavItem>
      </Nav>
      <Container>
        <Routes>
          <Route path={"/:id/myinfo"} element={<MyInfos />} />
          <Route
            path={"/:id/mysubscribe"}
            element={<MySubscribe user={user} />}
          />
          <Route path={"/:id/myrental"} element={<MyRental />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default MyPage;

//-----스타일
const { flexColumn } = myCSS;
const { colors, fonts } = myTheme;

const Wrapper = styled.div`
  display: flex;
  min-height: inherit;

  background-color: ${colors.gray};
  @media screen and (max-width: 480px) {
    ${flexColumn};
  }
`;

const Nav = styled.div`
  ${flexColumn};
  flex-basis: 15rem;
  min-width: 12rem;

  padding: 5rem 2rem;
  background-color: ${colors.bg};
  @media screen and (max-width: 480px) {
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
const Container = styled.div`
  width: 100%;
  padding: 5rem 0;

  background-color: ${colors.gray};
`;
