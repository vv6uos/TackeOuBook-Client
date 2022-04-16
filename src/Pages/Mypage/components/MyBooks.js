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
  const userId = user.id;
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/userBooks/read/user/${userId}`)
      .then((result) => {
        const response = result.data;
        console.log("USERBOOKS/READ RESPONSE : ", response);
        if (response.answer) {
          console.log(response.result);
          const userBooks = response.result;
          setMyBooks(userBooks);
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : USERBOOKS/UPDATE REQUEST");
        alert("마이페이지 서버 관리자에게 문의 부탁드립니다");
      });
  }, [userId]);

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
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : USERBOOKS/UPDATE REQUEST");
        alert("마이페이지 서버 관리자에게 문의 부탁드립니다");
      });
  };

  return (
    <Wrapper>
      <Container>
        <Subject>대여현황</Subject>
        <BookShelf>
          {myBooks.map((book) => {
            const now = dayjs();
            const daysFromNow = dayjs(book.rentBy).diff(now, "day");
            const bookTitle = book.Book.name.split("-");
            return (
              <Card key={book.rental_id}>
                <div className="rentDate">
                  {dayjs(book.rentAt).format("YYYY-MM-DD")} 대여
                </div>
                <BookInfoBox>
                  <BookImg src={book.Book.imgURL} alt="대여 책 사진" />
                  <div className="title">{bookTitle[0]}</div>
                </BookInfoBox>
                <ReturnBox>
                  <div className="returnAt">반납 기한 {daysFromNow}일전</div>
                  <ReturnButton
                    onClick={() => {
                      onClickReturnBtn(book.rental_id, book.fk_book_id);
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
        <Subject>지난대여</Subject>
        <BookShelf>
          <Card>
            <BookInfoBox>
              <BookImg
                src="https://image.aladin.co.kr/product/28596/70/cover/k832835755_1.jpg"
                alt="대여 책 사진"
              />
              <div className="title">
                프로그래머의 뇌- 훌륭한 프로그래머가 알아야 할 인지과학의 모든
                것{" "}
              </div>
            </BookInfoBox>
            <div className="rentDate">2021.03.12 ~ 2021.03.19</div>
          </Card>
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
