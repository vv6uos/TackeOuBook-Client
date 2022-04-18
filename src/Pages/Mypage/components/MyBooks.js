//-----import 외부
import styled from "styled-components";
import axios from "axios";
import { React, useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//-----import 내부
import { myCSS, myTheme } from "style/index";
import { API_URL } from "config/constants";
dayjs.extend(relativeTime);

//----- 메인: 회원의 대여현황 컴포넌트
function MyBooks({ user }) {
  const [myBooksOnRent, setMyBooksOnRent] = useState([]);
  const [myReturnedBooks, setMyReturnedBooks] = useState([]);
  const [loadBooks, setLoadBooks] = useState(false);

  useEffect(() => {
    //대여중인 책들 서버에 요청
    axios
      .get(`${API_URL}/userBooks/read/user/${user.id}/onRent`)
      .then((result) => {
        const response = result.data;
        console.log("USERBOOKS/READ/OnRent RESPONSE : ", response);
        if (response.answer) {
          const userBooks = response.result;
          setMyBooksOnRent(newBookList(userBooks));
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : USERBOOKS/UPDATE/OnRent REQUEST");
      });

    //반납한 책들 서버에 요청
    axios
      .get(`${API_URL}/userBooks/read/user/${user.id}/returned`)
      .then((result) => {
        const response = result.data;
        console.log("USERBOOKS/READ/returned RESPONSE : ", response);
        if (response.answer) {
          const userBooks = response.result;
          setMyReturnedBooks(newBookList(userBooks));
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : USERBOOKS/UPDATE/returned REQUEST");
      });

    setLoadBooks(false);
  }, [user.id, loadBooks]);

  const newBookList = (bookList) => {
    const setBookList = bookList.map((book) => {
      const setBook = {
        rentId: book.rental_id,
        rentAt: formatDate(book.rentAt),
        rentBy: formatDate(book.rentBy),
        returnAt: formatDate(book.returnAt),
        bookId: book.fk_book_id,
        title: firstTitle(book.Book.name),
        imgURL: book.Book.imgURL,
      };
      return setBook;
    });
    return setBookList;
  };
  const formatDate = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };
  const firstTitle = (title) => {
    const Titles = title.split("-");
    return Titles[0];
  };

  const onClickReturnBtn = (userBookId, bookId) => {
    axios
      .get(
        `${API_URL}/userBooks/update?userBookId=${userBookId}&bookId=${bookId}`
      )
      .then((result) => {
        const response = result.data;
        console.log("USERBOOKS/UPDATE RESPONSE : ", response);
        if (response.answer) {
          console.log(response.result);
          alert("반납되었습니다.");
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : USERBOOKS/UPDATE REQUEST");
        alert("마이페이지 관리자에게 문의 부탁드립니다");
      });
    setLoadBooks(true);
  };

  return (
    <Wrapper>
      <Container>
        <Subject>대여한 도서</Subject>
        <BookShelf>
          {myBooksOnRent.map((myBookOnRent) => {
            const now = dayjs();
            const daysFromNow = dayjs(myBookOnRent.rentBy).diff(now, "day");

            return (
              <Card key={myBookOnRent.rentId}>
                <div className="rentDate">
                  {formatDate(myBookOnRent.rentAt)} 대여
                </div>
                <BookInfoBox>
                  <BookImg src={myBookOnRent.imgURL} alt="대여 책 사진" />
                  <div className="title">{myBookOnRent.title}</div>
                </BookInfoBox>
                <ReturnBox>
                  <div className="returnAt">반납 기한 {daysFromNow}일전</div>
                  <ReturnButton
                    onClick={() => {
                      onClickReturnBtn(
                        myBookOnRent.rentId,
                        myBookOnRent.bookId
                      );
                    }}
                  >
                    반납
                  </ReturnButton>
                </ReturnBox>
              </Card>
            );
          })}
        </BookShelf>
      </Container>
      <Container>
        <Subject>읽은 도서</Subject>
        <BookShelf>
          {myReturnedBooks.map((returnedBook) => {
            return (
              <Card key={returnedBook.rentId}>
                <BookInfoBox>
                  <BookImg src={returnedBook.imgURL} alt="대여 책 사진" />
                  <div className="title">{returnedBook.title}</div>
                </BookInfoBox>
                <div className="rentDate">
                  {formatDate(returnedBook.rentAt)} ~
                  {formatDate(returnedBook.returnAt)}
                </div>
              </Card>
            );
          })}
        </BookShelf>
      </Container>
    </Wrapper>
  );
}

export default MyBooks;

//----- 스타일
const { flexColumn } = myCSS;
const { fontStyles, colors } = myTheme;

const Wrapper = styled.div`
  ${flexColumn}
  padding-left:3rem;
  padding-right: 3rem;
`;

const Container = styled.div`
  ${flexColumn};
  width: 100%;
`;
const Subject = styled.div`
  ${fontStyles.semiTitle}
`;
const BookShelf = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 0.8em;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const Card = styled.div`
  ${fontStyles.body};

  margin-left: 1rem;

  width: 12rem;
  height: 25em;
  .rentDate {
    font-size: 1em;
  }
  @media screen and (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const BookInfoBox = styled.div`
  ${fontStyles.smbold};
  background-color: white;
  border: 1px solid gray;
  padding: 0.5em;
  .title {
    height: 4em;
    margin-top: 0.5rem;
    padding: 0.3rem 0 0 0.3rem;
    border-top: 1px solid gray;
  }
`;
const BookImg = styled.img`
  max-width: 90%;
  height: 12rem;
  display: block;
  margin: 0px auto;
`;

const ReturnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.2em;
  .returnAt {
    margin-top: 0.2em;
    color: orange;
    font-size: 1em;
  }
`;

const ReturnButton = styled.button`
  margin: 0;
  border: 1px solid ${colors.d1};
  height: 2em;
  width: 3.6em;
  font-size: 1em;
`;
