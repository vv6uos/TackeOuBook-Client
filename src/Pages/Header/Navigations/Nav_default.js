import styled from "styled-components";

//내부 import
import { myTheme } from "style";
import { BookContainer, NavButton, SubscribeButton } from "./Nav_buttons/index";

//메인
function DefaultNav({ setPop }) {
  return (
    <Nav>
      <BookContainer />
      <NavButton moveTo="/login">로그인</NavButton>
      <NavButton moveTo="/register">회원가입</NavButton>
      <SubscribeButton
        onClick={() => {
          setPop(true);
        }}
      />
    </Nav>
  );
}

export default DefaultNav;
//함수

//스타일
const { colors } = myTheme;

const Nav = styled.div`
  height: 4rem;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;
