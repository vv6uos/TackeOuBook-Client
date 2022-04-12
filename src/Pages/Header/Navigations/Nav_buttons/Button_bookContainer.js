//-----import 외부
import styled from "styled-components";
import { useParams } from "react-router-dom";
//-----import 내부
import { MyLink } from "components";

//-----메인 네비게이션의 책장아이콘 컴포넌트
function BookContainer({ userId }) {
  return (
    <MyLink to={`/mypage/${userId}/myrental`}>
      <Img src="https://i.imgur.com/YILs4kW.jpg" />
    </MyLink>
  );
}

export default BookContainer;

const Img = styled.img`
  height: 3rem;
`;
