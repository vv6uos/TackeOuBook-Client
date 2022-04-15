//-----import 외부
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//-----import 내부
import { myTheme } from "style";
import { NavButton, SubscribeButton, BookContainer } from "./Nav_buttons/index";
import { logout } from "function";

//----메인 로그인한 회원 유저에게만 보여지는 navigtion컴포넌트<마이페이지,로그아웃>
function MemberNav({ user, setPop }) {
  const navigate = useNavigate();
  //이벤트함수: 로그아웃 버튼 클릭 시 , 실행

  const onClickLogoutBtn = () => {
    //서버에서 유저세션을 삭제
    logout();
  };
  //이벤트함수 : 구독 버튼을 클릭시 구독자이면 마이페이지>구독현황으로 이동, 비구독자면 구독팝업 생성
  const onClickSubscribeBtn = () => {
    if (user.isSubscriber) {
      setPop(false);
      navigate(`/mypage/subscribe`);
    } else {
      setPop(true);
    }
  };

  return (
    <Nav>
      <LeftContainer>
        <BookContainer userId={user.id} />
        <User>{`${user.name}님`}</User>
        <SubscribeButton onClick={onClickSubscribeBtn} />
      </LeftContainer>
      <RightContainer>
        <NavButton moveTo="/mypage/subscribe">마이페이지</NavButton>
        <NavButton onClick={onClickLogoutBtn}>로그아웃</NavButton>
      </RightContainer>
    </Nav>
  );
}

export default MemberNav;

//----스타일

const { fonts, colors } = myTheme;

const Nav = styled.div`
  height: 4rem;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  color: ${colors.d1};
  font-family: ${fonts.m};
  font-size: 1.2rem;
  height: 1.2rem;
  margin: 0 0.5rem;
  padding-right: 0.5rem;
  border-right: 2px solid ${colors.d1};
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RightContainer = styled.div``;
