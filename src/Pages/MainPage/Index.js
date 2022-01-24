import styled from "styled-components";

//내부 import
import BestSellers from "./BestSellers";
import Books from "./Books";
import FlexBoxes  from "components/styled/FlexBoxes";

const { ColumnBox } = FlexBoxes;

//index
function MainPage() {
  return (
    <ColumnBox>
      <Banner src="/images/banner-003.png" alt="배너" />
      <BestSellers />
      <Books />
    </ColumnBox>
  );
}

export default MainPage;

//style
const Banner = styled.img`
  width: 100%;
`;
