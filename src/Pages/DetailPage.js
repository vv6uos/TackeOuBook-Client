import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "config/constants";
import styled from "styled-components";

import Theme from "style/theme";
import FlexBoxes from "components/styled/FlexBoxes";
import Button from "components/styled/Button";

const { fontStyles, colors } = Theme;
const { FlexBox, ColumnBox } = FlexBoxes;

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
    <>
      <TitleBox>
        <h1>
          ` {book.id} {book.name}`
        </h1>
      </TitleBox>
      <FlexBox>
        <Img src={`${book.imgURL}`} alt="책이미지" id="image" />
        <ColumnBox>
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
          <Button>대여하기</Button>
        </ColumnBox>
      </FlexBox>
    </>
  );
}

export default DetailPage;

//style

const TitleBox = styled.div`
  ${fontStyles.mainTitle}
  border-bottom: 1.5px solid ${colors.c4}
`;
const Img = styled.img`
  height: 40vmin;
  max-height: 500px;
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
//function

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
