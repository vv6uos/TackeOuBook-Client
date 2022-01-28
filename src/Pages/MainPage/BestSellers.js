//-----외부
import styled from "styled-components";
import axios from "axios";
import { React, useState, useEffect } from "react";

//-----내부
import { API_URL } from "config/constants";
import Theme from "style/theme";
import myCSS from "style/favoriteCss";

const { fontStyles } = Theme;

//-----메인 함수

function BestSellers() {
  const [bestsellers, setBestsellers] = useState([]);
  useEffect(() => {
    AxiosBestsellers({ setBestsellers });
  }, []);

  return (
    <Wrapper>
      <Title>추천도서 (출처 : 알라딘 베스트셀러 추천도서 API) </Title>
      <Container alt="베스트셀러">
        {bestsellers.map((bestseller) => {
          return (
            <Card>
              <BookImg src={`${bestseller.imgURL}`} alt="베스트셀러 사진" />
              <BookInfoBox>
                <p>{bestseller.id}</p>
                <p>{bestseller.name}</p>
              </BookInfoBox>
            </Card>
          );
        })}
      </Container>
    </Wrapper>
  );
}
export default BestSellers;

//-----함수

function AxiosBestsellers({ setBestsellers }) {
  axios
    .get(`${API_URL}/bestsellers`)
    .then((result) => {
      const bestsellers = result.data;
      console.log("베스트셀러 데이터 전송 성공 : ", bestsellers);
      setBestsellers(bestsellers);
    })
    .catch((err) => {
      console.log("실패 :", err);
    });
}

//-----스타일
const Wrapper = styled.div`
  ${myCSS.flexColumn}
`;
const Title = styled.div`
  ${fontStyles.semiTitle}
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  margin: 1.5rem auto;
  width: 100%;
  max-width: 250px;
  ${fontStyles.body};
`;
const BookImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 24vmin;
  max-height: 270px;
`;

const BookInfoBox = styled.div`
  padding: 0 2vmin;
`;
