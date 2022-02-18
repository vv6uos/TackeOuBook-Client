import styled from "styled-components";
import { Button } from "components";
import { myTheme } from "style";
const { fonts, colors } = myTheme;
function SubscribePop(props) {
  const { close } = props;
  return (
    <>
      <Main>구독하시게 되면 도서를 대여할 수 있습니다</Main>
      <Footer>
        <Button onClick={close}>구독하기</Button>
        <Button onClick={close}>다음에</Button>
      </Footer>
    </>
  );
}

export default SubscribePop;

const Main = styled.div`
  padding: 5rem;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const Footer = styled.div`
  padding: 12px 16px;
  text-align: right;
`;
