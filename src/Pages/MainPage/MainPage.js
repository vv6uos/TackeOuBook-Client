//-----import 외부 소스
import styled from "styled-components";
//-----import 내부
import BestSellers from "./BestSellers";
import Books from "./Books";
import { myCSS } from "style";

function MainPage() {
  return (
    <Wrapper>
      <Banner src="https://i.imgur.com/nTpq5NF.png" alt="배너" />
      <BestSellers />
      <Books />
    </Wrapper>
  );
}
export default MainPage;

//-----스타일

const Wrapper = styled.div`
  padding-bottom: 2rem;
  ${myCSS.flexColumn}
`;
const Banner = styled.img`
  width: 100%;
`;
