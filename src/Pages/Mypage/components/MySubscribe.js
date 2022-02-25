//-----import 외부
import styled, { css } from "styled-components";
//-----import 내부
import { myCSS, myTheme } from "style";
import { Button } from "components";
import onChangeSubscribe from "components/Modals/Subscribe/onChangeSubscribe";

//-----메인 회원의 구독정보를 제공하는 컴포넌트 
function MySubscribe({ isMember }) {
  //props에서 유저정보를 받아옴
  const { id, subscribe, name } = isMember;

  //이벤트함수 : 유저가 구독정보변경 컴포넌트의 버튼 클릭시 발생하는 함수
  const onSubscribe = () => {
    onChangeSubscribe(id, !subscribe);
  };

  //구독자이면 구독취소에 대한 내용과 버튼 활성화, 비구독자이면 구독 내용과 버튼 활성화
  if (subscribe) {
    var word = {
      info: "구독중",
      subj: "구독취소",
      cont: "대여 예정이던 도서들은 취소처리됩니다.",
      Btn: "해지하기",
    };
  } else {
    var word = {
      info: "구독전",
      subj: "구독하기",
      cont: "구독하시게 되면 도서를 대여할 수 있습니다.",
      Btn: "구독하기",
    };
  }

  return (
    <Wrapper>
      <Brief>
        <Info>{`${name}님은 `}</Info>
        <Info className="subscribe">{word.info}</Info>
        <Info>입니다</Info>
      </Brief>
      <Container className="userSubscribeChangeCompnt">
        <Subject>{word.subj}</Subject>
        <Contents>{word.cont}</Contents>
        <Button margin="0 0 0 70%" onClick={onSubscribe}>
          {word.Btn}
        </Button>
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 60%;
  min-width: 300px;
`;

const Wrapper = styled.div`
  ${flexColumn}
  padding: 6%;
`;

const Brief = styled.div`
  ${center}
  ${containerStyle}
  align-items: center;
`;

const Info = styled.div`
  float: left;
  ${fontStyles.smbold}
  margin-top: 0.3em;
  margin-left: 0.5rem;
  font-size: 1.2rem;

  &.subscribe {
    background-color: ${colors.pink};
    margin-top: 0;
    border-radius: 0.5rem;
    padding: 0.2em 0.5em;
  }
`;

const Container = styled.div`
  ${flexColumn};
  ${center};
  ${containerStyle}

  padding: 2.4rem 1rem;

  border-radius: 2rem;
  background-color: ${colors.bg};
`;
const Subject = styled.div`
  ${fontStyles.semiTitle}
`;
const Contents = styled.div`
  ${fontStyles.smbold}
  margin: 1.5rem 0;
`;
