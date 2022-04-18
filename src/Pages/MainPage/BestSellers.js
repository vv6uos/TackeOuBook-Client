//-----import 외부
import styled from "styled-components";
import axios from "axios";
import { React, useState, useEffect } from "react";

//-----import 내부
import { myCSS, myTheme } from "style/index";
import { API_URL } from "config/constants";

//-----메인 함수

function BestSellers() {
  //state
  const [bestsellers, setBestsellers] = useState([]);

  //함수 : 서버에서 besellers를 받아와 state에 저장
  useEffect(() => {
    axios.get(`${API_URL}/bestsellers`).then((result) => {
      const bestsellers = result.data;
      setBestsellers(bestsellers);
    });
  }, []);
  const firstTitle = (title) => {
    const Titles = title.split("-");
    return Titles[0];
  };

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
                <div>{firstTitle(bestseller.title)}</div>
              </BookInfoBox>
            </Card>
          );
        })}
      </Container>
    </Wrapper>
  );
}
export default BestSellers;

//-----스타일

const { fontStyles, colors } = myTheme;

const Wrapper = styled.div`
  ${myCSS.flexColumn}
  border:1px solid ${colors.gray};
  max-width: 100%;
  overflow-x: auto;
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
