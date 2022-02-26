//-----import 외부
import styled, { css } from "styled-components";
//-----import 내부
import { myCSS, myTheme } from "style";
import { ChangeSubscribe, SubscribeInfo } from "./components/index.js";

//-----메인 회원의 구독정보를 제공하는 컴포넌트
function MySubscribe({ user }) {
  return (
    <Wrapper>
      <Container className="info">
        <SubscribeInfo user={user} />
      </Container>
      <Container>
        <ChangeSubscribe user={user} />
      </Container>
      <Container>
        <Subject>정기구독일정</Subject>
        <Contents>업데이트 예정입니다</Contents>
      </Container>
    </Wrapper>
  );
}

export default MySubscribe;

//-----스타일
const { flexColumn, center } = myCSS;
const { fontStyles, colors } = myTheme;
const containerStyle = css`
  margin-bottom: 2rem;
  width: 28rem;
  @media screen and (max-width: 480px) {
    width: 28rem;
  }
`;

const Wrapper = styled.div`
  ${flexColumn}
`;

const Container = styled.div`
  ${flexColumn};
  ${center};
  ${containerStyle}

  padding:2rem;
  border-radius: 2rem;
  background-color: ${colors.bg};

  &.info {
    flex-direction: row;

    padding: 0;
    border-radius: none;
    background-color: ${colors.gray};
  }
`;
const Subject = styled.div`
  ${fontStyles.semiTitle}
`;
const Contents = styled.div`
  ${fontStyles.smbold}
  margin: 1.5rem 0;
`;
