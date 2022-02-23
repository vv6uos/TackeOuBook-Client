//-----외부 소스
import { React, useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

//-----내부 소스
import { API_URL } from "config/constants";
import { myCSS, myTheme } from "style";
import { MyLink } from "components";

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
            <Card key={book.id}>
              <MyLink to={`/books/${book.id}`}>
                <BookImg src={`${book.imgURL}`} alt="도서사진" />
                <BookInfoBox>
                  <Info className="author">| {book.author}</Info>
                  <Info>{book.name}</Info>
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
const { fontStyles, colors } = myTheme;

const Wrapper = styled.div`
  ${myCSS.flexColumn}
  border-top:6px double ${colors.m1};
  margin-top: 3rem;
`;
const Title = styled.h1`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  ${fontStyles.mainTitle}
  font-size:2rem;
`;
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
`;

const Card = styled.div`
  margin: 1rem 0.5rem;
  flex-basis: 23.5%;
  ${fontStyles.body};
`;

const BookImg = styled.img`
  display: block;
  margin: 5% auto;
  height: 15.46rem;
  border: 3px solid ${colors.gray};
`;

const BookInfoBox = styled.div`
  padding: 5% 2%;
  text-decoration: none;
  border-top: 3px solid ${colors.gray};
`;

const Info = styled.div`
  & ~ & {
    margin-top: 0.5em;
  }
  ${fontStyles.smbold}
  color: ${colors.m1};
  &.author {
    ${fontStyles.mini}
  }
`;
