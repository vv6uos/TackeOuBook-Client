//-----import 외부
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//-----import 내부
import { myTheme } from "style";
import { Button } from "components";

//-----메인 구독자에게 대여의사를 묻고 대여정보를 변경하는 팝업창
function RentPop(props) {
  const navigate = useNavigate();
  //props
  const { close } = props;
  //이벤트함수 : 대여하기 버튼 클릭시 책이 대여상태로 변경되고 userBooks 데이터가 추가됨
  const onRent = () => {
    console.log("책대여 변경, userBooks 크리에이트");
    //그리고 상태 리로드
  };
  return (
    <>
      <Main>이 책을 대여하시겠습니까?</Main>
      <Footer>
        <Button onClick={onRent}>대여하기</Button>
        <Button onClick={close}>다음에</Button>
      </Footer>
    </>
  );
}

export default RentPop;

//-----스타일
const Main = styled.div`
  ${myTheme.fontStyles.smbold};
  padding: 2rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const Footer = styled.div`
  padding: 12px 16px;
  text-align: right;
`;
