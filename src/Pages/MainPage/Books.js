//-----외부 소스
import { React, useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

//-----내부 소스
import { API_URL } from "config/constants";
import { myCSS, myTheme } from "style";
import { MyLink } from "components";

const { fontStyles } = myTheme;


function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    AxiosBooks({ setBooks });
  }, []);

  return (
    <Wrapper>
      <Title>대여 가능 도서</Title>
      <Container name="대여가능도서">
        {books.map((book) => {
          return (
            <Card>
              <MyLink to={`/books/${book.id}`}>
                <BookImg src={`${book.imgURL}`} alt="도서사진" />
                <BookInfoBox>
                  <p>{book.id}</p>
                  <p>도 서 명: {book.name}</p>
                  <p>대여가격: {book.price.toLocaleString()}원</p>
                  <p>저 자: {book.seller}</p>
                </BookInfoBox>
              </MyLink>
            </Card>
          );
        })}
      </Container>
    </Wrapper>
  );
}
export default Books;

//-----함수

function AxiosBooks({ setBooks }) {
  axios
    .get(`${API_URL}/books`)
    .then((result) => {
      const books = result.data;
      setBooks(books);
      console.log("판매도서 데이터 전송 성공 : ", books);
    })
    .catch((err) => {
      console.log("실패 :", err);
    });
}

//-----스타일
const Wrapper = styled.div`
  ${myCSS.flexColumn}
`;
const Title = styled.h1`
  ${fontStyles.mainTitle}
`;
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Card = styled.div`
  margin: 1.5rem 0.6rem;
  flex-basis: 20rem;

  ${fontStyles.body};
`;

const BookImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 27rem;
`;

const BookInfoBox = styled.div`
  padding: 0 1.5vw;
  text-decoration: none;
`;
