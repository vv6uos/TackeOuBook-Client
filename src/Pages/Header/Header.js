//-----import 외부
import styled from "styled-components";
import { useState } from "react";
//-----import 내부
import { myTheme } from "style";
import { Logo, Modal, SubscribePop } from "components";
import { MemberNav, DefaultNav } from "./Navigations/index";

//----- 메인 로그인/로그인하지않은 유저에게 각각 다른 navigation컴포넌트 보여짐
function Header({ user }) {
  //state 팝업창 여닫기 기능 수행
  const [pop, setPop] = useState(false);
  //이벤트 함수 : 버튼 클릭시 팝업창의 닫기 기능을 수행 팝업관련 컴포넌트에 자식으로 전달
  const onClosePop = () => {
    setPop(false);
  };

  return (
    <HeaderBox>
      {/* {네비게이션 구독버튼 클릭시 구독자여부에 따라 모달창 생성} */}
      {pop && (
        <Modal
          title="구독"
          open={pop}
          close={onClosePop}
          content={<SubscribePop close={onClosePop} user={user} />}
        />
      )}
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {/* 로그인여부에 따라 네비게이션 내용이 바뀜 */}
      {user.isLogin ? (
        <MemberNav setPop={setPop} user={user} />
      ) : (
        <DefaultNav setPop={setPop} />
      )}
    </HeaderBox>
  );
}
export default Header;

//----- 스타일
const { colors } = myTheme;
const HeaderBox = styled.div`
  width: 100%;
`;
const LogoContainer = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${colors.m1};
`;
