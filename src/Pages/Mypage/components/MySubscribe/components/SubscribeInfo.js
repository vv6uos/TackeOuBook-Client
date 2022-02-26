//-----import 외부
import styled from "styled-components";
//-----import 내부
import { myTheme } from "style";

//-----메인 회원의 구독정보를 제공하는 컴포넌트
function SubscribeInfo({ user }) {
  const { isSubscriber, name } = user;

  //구독정보상태 메세지 설정
  const subscribeStatusMsg = isSubscriber ? "구독중" : "구독전";

  return (
    <>
      <Info>{`${name}님은 `}</Info>
      <Info className="subscribeStatus">{subscribeStatusMsg}</Info>
      <Info>입니다</Info>
    </>
  );
}

export default SubscribeInfo;

//-----스타일
const { fontStyles, colors } = myTheme;

const Info = styled.div`
  ${fontStyles.smbold}
  margin-top: 0.3em;
  margin-left: 0.5rem;
  font-size: 1.2rem;

  &.subscribeStatus {
    background-color: ${colors.pink};
    margin-top: 0;
    border-radius: 0.5rem;
    padding: 0.2em 0.5em;
  }
`;
