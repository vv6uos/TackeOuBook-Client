//-----import 외부
import styled from "styled-components";
import axios from "axios";

//-----import 내부
import { myTheme } from "style";
import { API_URL } from "config/constants";
import { Button } from "components";

//-----메인 구독자에게 대여의사를 묻고 책의대여상태를 변경하는 팝업내용부분 
function RentPop(props) {
  const { close, id } = props;

  //이벤트함수 : 대여하기 버튼 클릭시 책의 대여상태 변경되고 userBooks 데이터가 추가됨
  const onChangeRentStatus = () => {
    console.log(id);
    axios
      .get(`${API_URL}/books/${id}/changeRentStatus`)
      .then((result) => {
        if (result.data) {
          alert(
            "대여하셨습니다. 자세한 정보는 마이페이지>대여현황에서 확인해주세요."
          );
          close();
          window.location.reload();
        } else alert("관리자에게 문의 부탁드립니다.");
      })
      .catch((err) => {
        console.log("책 대여 AXIOS 실패", err);
      });
    //추가로 userBooks데이터 생성하기
  };

  //-----메인 인덱스
  return (
    <>
      <Main>이 책을 대여하시겠습니까?</Main>
      <Footer>
        <Button onClick={onChangeRentStatus}>대여하기</Button>
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
