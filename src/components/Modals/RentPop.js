//-----import 외부
import styled from "styled-components";
import axios from "axios";

//-----import 내부
import { myTheme } from "style";
import { API_URL } from "config/constants";
import { Button } from "components";

//-----메인 구독자에게 대여의사를 묻고 책의대여상태를 변경 , userBooks데이터 생성
function RentPop(props) {
  const { close, user, id } = props;
  const bookId = id;
  const userId = user.id;

  //이벤트함수 : 대여하기 버튼 클릭시 책의 대여상태 변경, userBooks 데이터가 추가됨
  const onClickRentBtn = () => {
    axios
      .get(`${API_URL}/userBooks/create?userId=${userId}&bookId=${bookId}`)
      .then((result) => {
        const response = result.data;
        console.log("USERBOOKS/CREATE RESPONSE : ", response);
        if (response.answer) {
          alert(
            "대여하셨습니다. 자세한 정보는 마이페이지>대여현황에서 확인해주세요."
          );
          close();
          window.location.reload();
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : USERBOOKS/CREATE REQUEST");
        alert("책 대여 서버관리자에게 문의 부탁드립니다");
      });
  };

  //-----메인 인덱스
  return (
    <>
      <Main>이 책을 대여하시겠습니까?</Main>
      <Footer>
        <Button onClick={onClickRentBtn}>대여하기</Button>
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
