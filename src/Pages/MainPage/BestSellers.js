//외부
import styled from "styled-components";
import axios from "axios";
import { React, useState, useEffect } from "react";

//내부
import { API_URL } from "config/constants";
import FlexBoxes from "components/styled/FlexBoxes";
import Theme from "style/theme";

const { FlexBox, ColumnBox } = FlexBoxes;
const { fontStyles } = Theme;

//index

function BestSellers() {
  const [bestsellers, setBestsellers] = useState([]);
  useEffect(() => {
    AxiosBestsellers({ setBestsellers });
  }, []);

  return (
    <ColumnBox>
      <H3>추천도서 (출처 : 알라딘 베스트셀러 추천도서 API) </H3>
      <FlexBox>
        {bestsellers.map((bestseller) => {
          return (
            <Card>
              <BestsellerImg
                src={`${bestseller.imgURL}`}
                alt="베스트셀러 사진"
              />
              <BestsellerInfo>
                <p>{bestseller.id}</p>
                <p>{bestseller.name}</p>
              </BestsellerInfo>
            </Card>
          );
        })}
      </FlexBox>
    </ColumnBox>
  );
}
export default BestSellers;

//스타일

const H3 = styled.h3`
  ${fontStyles.semiTitle}
`;

const Card = styled.div`
  margin: 1.5rem auto;
  width: 100%;
  max-width: 250px;
  ${fontStyles.body};
`;
const BestsellerImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 24vmin;
  max-height: 270px;
`;

const BestsellerInfo = styled.div`
  padding: 0 2vmin;
`;

//함수

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
