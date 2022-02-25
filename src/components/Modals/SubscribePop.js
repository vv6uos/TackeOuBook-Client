//-----import 외부
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//-----import 내부
import { myTheme } from "style";
import { Button } from "components";
import { onChangeSubscribe } from "function";

//-----메인
function SubscribePop(props) {
  const navigate = useNavigate();
  //props
  const { close, isMember } = props;
  //이벤트함수 : 구독하기 버튼 클릭시 로그인 유무에 따라 모달창 생성
  const onSubscribe = () => {
    if (isMember.login) {
      onChangeSubscribe(isMember.id, true);
    } else {
      alert("로그인을 먼저 해주세요!");
      close();
      navigate("/login");
    }
  };
  return (
    <>
      <Main>구독하시게 되면 도서를 대여할 수 있습니다</Main>
      <Footer>
        <Button onClick={onSubscribe}>구독하기</Button>
        <Button onClick={close}>다음에</Button>
      </Footer>
    </>
  );
}

export default SubscribePop;

//-----스타일
const Main = styled.div`
  ${myTheme.fontStyles.smbold};
  padding: 3rem 1.5rem;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const Footer = styled.div`
  padding: 12px 16px;
  text-align: right;
`;
