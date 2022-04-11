//-----import 외부
import styled, { css } from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
//-----import 내부
import { Button } from "components";
import { myCSS, myTheme } from "style/index";
import { API_URL } from "config/constants";

//----- 메인: 회원의 대여현황 컴포넌트
function MyRental() {
  const [myBooks, setMyBooks] = useState([]);
  const { id } = useParams("");
  useEffect(() => {
    axios
      .get(`${API_URL}/member/${id}/books`)
      .then((result) => {
        const response = result.data;
        console.log("MEMBER/BOOKS RESPONSE : ", response);
        if (response.answer) {
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : MEMBER/BOOKS REQUEST");
        alert("마이페이지 서버 관리자에게 문의 부탁드립니다");
      });
  }, []);
  return (
    <Wrapper>
      <Container>
        <Subject>대여현황</Subject>
        <BookShelf>
          <Card>
            <div className="rentDate">2021.03.12 대여</div>
            <BookInfoBox>
              <BookImg
                src="https://image.aladin.co.kr/product/28596/70/cover/k832835755_1.jpg"
                alt="대여 책 사진"
              />
              <div>
                프로그래머의 뇌- 훌륭한 프로그래머가 알아야 할 인지과학의 모든
                것{" "}
              </div>
            </BookInfoBox>
            <ReturnBox>
              <div className="returnAt">반납예정 2021.03.19</div>
              <ReturnButton
                onClick={() => {
                  alert("반납하시겠습니까?");
                }}
              >
                반납
              </ReturnButton>
            </ReturnBox>
          </Card>
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
              <div>
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

export default MyRental;

//----- 스타일
const { flexColumn, center } = myCSS;
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
  font-size: 0.7em;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const Card = styled.div`
  ${fontStyles.body};
  width: 15em;
  height: auto;
  .rentDate {
    font-size: 1.2em;
  }
`;

const BookInfoBox = styled.div`
  ${fontStyles.smbold};
  background-color: white;
  border: 1px solid gray;
  padding: 0.5em;
`;
const BookImg = styled.img`
  max-width: 90%;
  height: auto;
  display: block;
  margin: 0px auto;
`;

const ReturnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.2em;
  .returnAt {
    color: orange;
    font-size: 1.1em;
  }
`;

const ReturnButton = styled.button`
  margin: 0;
  border: 1px solid ${colors.d1};
  height: 2em;
  width: 3.6em;
  font-size: 1em;
`;
