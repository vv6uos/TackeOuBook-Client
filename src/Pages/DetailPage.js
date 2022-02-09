//-----외부 소스
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

//-----내부 소스
import Button from "components/Button/Button";
import { API_URL } from "config/constants";
import { myCSS, myTheme } from "style";

const { fontStyles, colors } = myTheme;

function DetailPage() {
  const { id } = useParams([]);
  const [book, setBook] = useState();
  console.log("비동기처리test", book);
  useEffect(() => {
    AxiosBook({ setBook, id });
  }, [id]);
  if (book === undefined) {
    return <span>상품정보를 받아오고 있는중입니다.</span>;
  }

  return (
    <Wrapper>
      <TitleBox>
        `{book.id} {book.name}`
      </TitleBox>
      <Container>
        <Img src={`${book.imgURL}`} alt="책이미지" id="image" />
        <Box>
          <InfoBox>
            <Info>
              <Label>판매자</Label>
              <div className="info">{book.seller}</div>
            </Info>
            <Info>
              <Label>판매가</Label>
              <div className="info">{book.price.toLocaleString()}원</div>
            </Info>
            <Info>
              <Label>상품상태</Label>
              <div className="info">상</div>
            </Info>
            <Info>
              <Label>도서소개</Label>
              <div className="info">투자명인 ㅇㅇㅇㅇ가 썼씁니다</div>
            </Info>
          </InfoBox>
          <Button onClick={onClickRent}>대여하기</Button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default DetailPage;

//----- 함수

function AxiosBook({ setBook, id }) {
  axios
    .get(`${API_URL}/books/${id}`)
    .then((result) => {
      const book = result.data;
      setBook(book);
      console.log("판매도서 데이터 전송 성공 : ", book);
    })
    .catch((err) => {
      console.log("실패 :", err);
    });
}

function onClickRent() {
  console.log("대여하기 버튼 클릭");
}
//----- 스타일
const Wrapper = styled.div``;
const TitleBox = styled.div`
  ${fontStyles.mainTitle}
  margin-top: 5rem;
  height: 5rem;
  padding: 1.5rem;
  border-bottom: 2px solid ${colors.d1};
`;
const Container = styled.div`
  background-color: ${colors.l1};
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Img = styled.img`
  height: 30rem;
`;
const Box = styled.div`
  ${myCSS.flexColumn}
`;
const InfoBox = styled.div`
  width: 60vmin;
  min-width: 200px;
  max-width: 500px;
`;

const Info = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5rem;
  border-bottom: 1px solid gray;
  margin: 1rem auto;

  .info {
    ${fontStyles.body}
  }
`;

const Label = styled.div`
  width: 10vw;
  min-width: 50px;
  max-width: 100px;
`;
