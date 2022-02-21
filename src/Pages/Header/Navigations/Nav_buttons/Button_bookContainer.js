import styled from "styled-components";
import { MyLink } from "components";

function BookContainer() {
  return (
    <MyLink to="/mypage">
      <Img src="https://i.imgur.com/YILs4kW.jpg" />
    </MyLink>
  );
}

export default BookContainer;

const Img = styled.img`
  height: 3rem;
`;
