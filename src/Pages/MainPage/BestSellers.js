//-----외부
import styled from "styled-components";
import axios from "axios";
import { React, useState, useEffect } from "react";

//-----내부
import { API_URL } from "config/constants";
import { myCSS, myTheme } from "style/index";

//-----메인 함수

function BestSellers() {
  const [bestsellers, setBestsellers] = useState([]);
  useEffect(() => {
    AxiosBestsellers({ setBestsellers });
  }, []);

  return (
    <Wrapper>
      <Title>
        <AladinLogo src="https://image.aladin.co.kr/img/blog2/main/aladdin_logo.gif" />
        <div>베스트셀러</div>
      </Title>
      <Container alt="베스트셀러">
        {bestsellers.map((bestseller) => {
          return (
            <Card
              key={bestseller.itemId}
              onClick={() => {
                window.open(`${bestseller.link}`);
              }}
            >
              <BookImg src={`${bestseller.cover}`} alt="베스트셀러 사진" />
              <BookInfoBox>
                <div>{bestseller.bestRank}</div>
                <div>{bestseller.title}</div>
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
      console.log("실패 :", err.response);
    });
}

//-----스타일

const { fontStyles, colors } = myTheme;

const Wrapper = styled.div`
  ${myCSS.flexColumn}
  border:1px solid ${colors.gray};
  min-width: 768px;
`;
const AladinLogo = styled.img`
  width: 8rem;
  height: 3rem;
  margin: 0 0.5em;
`;

const Title = styled.div`
  display: flex;
  margin-top: 1rem;
  ${fontStyles.semiTitle}
  font-size:1.5rem;
  line-height: 3.7rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  margin: 0 1.5rem 0 1.5rem;
  width: 100%;
  max-width: 250px;
  ${fontStyles.body};
`;
const BookImg = styled.img`
  border: 3px solid ${colors.gray};
  display: block;
  margin: 5% auto;
  height: 12rem;
  min-height: 100px;
  max-height: 270px;
`;

const BookInfoBox = styled.div`
  ${fontStyles.smbold};
  font-size: 0.8rem;
  border-top: 3px solid ${colors.gray};
  padding: 1rem;
`;
