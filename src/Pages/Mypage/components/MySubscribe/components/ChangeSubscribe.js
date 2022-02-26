//-----import 외부
import styled from "styled-components";
//-----import 내부
import { myTheme } from "style";
import { Button } from "components";
import { changeSubscribeStatus } from "function";

//-----메인 구독정보변경 컴포넌트
function ChangeSubscribe({ user }) {
  const { isSubscriber, id } = user;

  const onClickBtn = () => {
    changeSubscribeStatus(id, isSubscriber);
  };

  //회원의 구독정보에 따라 구독 컴포넌트의 제목,내용,버튼이름이 결정
  const subject = isSubscriber ? "구독취소" : "구독하기";
  const btnName = isSubscriber ? "해지하기" : "구독하기";
  const contents = isSubscriber
    ? "대여 예정이던 도서들은 취소처리됩니다."
    : "구독하시게 되면 도서를 대여할 수 있습니다.";

  return (
    <>
      <Subject>{subject}</Subject>
      <Contents>{contents}</Contents>
      <Button margin="0 0 0 70%" onClick={onClickBtn}>
        {btnName}
      </Button>
    </>
  );
}

export default ChangeSubscribe;

//-----스타일
const { fontStyles } = myTheme;

const Subject = styled.div`
  ${fontStyles.semiTitle}
`;
const Contents = styled.div`
  ${fontStyles.smbold}
  margin: 1.5rem 0;
`;
