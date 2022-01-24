//외부
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

//내부
import { API_URL } from "config/constants";
import Theme from "style/theme";
import FlexBoxes  from "components/styled/FlexBoxes";

const { fontStyles } = Theme;
const { WrapBox } = FlexBoxes;

//index
function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    AxiosBooks({ setBooks });
  }, []);

  return (
    <>
      <H1>대여 가능 도서</H1>
      <WrapBox>
        {books.map((book) => {
          return (
            <LinkCard bookId={`${book.id}`}>
              <BookImg src={`${book.imgURL}`} alt="판매도서사진" />
              <BookInfo>
                <p>{book.id}</p>
                <p>도 서 명: {book.name}</p>
                <p>판매가격: {book.price.toLocaleString()}원</p>
                <p>판 매 자: {book.seller}</p>
              </BookInfo>
            </LinkCard>
          );
        })}
      </WrapBox>
      판매도서 카드 만들기 판매완료된 도서는 회색으로 솔드아웃표시{" "}
    </>
  );
}
export default Books;

//style
const H1 = styled.h1`
  ${fontStyles.mainTitle}
`;

const LinkCard = ({ bookId, children }) => {
  const href = `/books/${bookId}`;
  return (
    <Card as="a" href={href} bookId={bookId}>
      {children}
    </Card>
  );
};

const Card = styled.div`
  margin: 1.5rem 0.6rem;
  flex-basis: 20rem;
  text-decoration: none;
  ${fontStyles.body};
`;

const BookImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 27rem;
`;

const BookInfo = styled.div`
  padding: 0 1.5vw;
`;

//function

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
