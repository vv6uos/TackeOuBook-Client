//-----import 외부
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

//-----import 내부
import { myCSS, myTheme } from "style";
import { API_URL } from "config/constants";
import { Button, Modal, SubscribePop, RentPop } from "components";

//----- 메인
function DetailPage({ isMember }) {
  //state 서버에서 받아온 book의 정보가 담길 변수
  const [book, setBook] = useState({});
  //state 팝업창의 여닫기를 설정하는 값이 담긴 변수
  const [pop, setPop] = useState(false);
  //변수 path에서 받아올 변수
  const { id } = useParams("");
  //서버 books DB에서 id에 맞는 book정보 받아오는 함수
  useEffect(() => {
    axios
      .get(`${API_URL}/books/${id}`)
      .then((result) => {
        const book = result.data;
        setBook(book);
      })
      .catch((err) => {
        console.log("실패 :", err);
      });
  }, [id]);
  //함수 :  구독자 여부에 따라 구독팝업 또는 대여팝업 생성
  const isPop = () => {
    return isMember.subscribe ? (
      <Modal
        title="대여"
        open={pop}
        close={onClosePop}
        content={<RentPop close={onClosePop} />}
      />
    ) : (
      <Modal
        title="대여"
        open={pop}
        close={onClosePop}
        content={<SubscribePop close={onClosePop} isMember={isMember} />}
      />
    );
  };
  //이벤트함수: 대여하기 버튼 클릭시 isPop에 따라 팝업생성  , 구독자=>대여팝업 , 비구독자=>구독팝업
  const onClickRentBtn = () => {
    setPop(true);
  };
  //이벤트함수 : 팝업창 닫기 기능
  const onClosePop = () => {
    setPop(false);
  };

  return (
    <Wrapper>
      {/* {대여버튼 클릭시 pop상태(회원정보)에 따라 모달창 생성} */}
      {pop && isPop()}
      <TitleBox>{book.name}</TitleBox>
      <Container>
        <Img src={`${book.imgURL}`} alt="책이미지" id="image" />
        <div className="right">
          <Infos>
            <div className="info">{book.description}</div>
            <div className="info">| {book.author}</div>
            <div className="info">| {book.publisher}</div>
          </Infos>
          {/**대여여부에 따라 대여버튼이 활성화, 대여중 이라는 메세지 표시 */}
          {book.onRent ? (
            <div className="NotRentMsg">이 책은 누군가 대여중입니다</div>
          ) : (
            <Button margin={"0"} onClick={onClickRentBtn}>
              대여하기
            </Button>
          )}
        </div>
      </Container>
    </Wrapper>
  );
}

export default DetailPage;

//----- 스타일
const { fontStyles, colors } = myTheme;
const Wrapper = styled.div`
  margin-top: 5rem;
`;
const TitleBox = styled.div`
  ${fontStyles.smbold}
  font-size:1.5rem;

  padding: 1.5rem;
  border-bottom: 2px solid ${colors.d1};
`;
const Container = styled.div`
  background-color: ${colors.l1};
  padding: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .right {
    ${myCSS.flexColumn}
    .NotRentMsg {
      ${fontStyles.body}
      color:red;
    }
  }
`;
const Img = styled.img`
  margin: 0 5rem;
  height: 22rem;
`;
const Infos = styled.div`
  margin-top: 1.5rem;
  width: 30rem;
  .info {
    ${fontStyles.body}
    margin-bottom: 1rem;
  }
`;
