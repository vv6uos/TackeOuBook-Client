import styled from "styled-components";
import { Button } from "components";
import { myTheme } from "style";
const { fonts, colors } = myTheme;
function DbChkPop(props) {
  const { close } = props;
  return (
    <>
      <Main>사용가능한 아이디입니다</Main>
      <Footer>
        <Button bgColor={colors.m1} onClick={close}>
          사용하기
        </Button>
      </Footer>
    </>
  );
}

export default DbChkPop;

const Main = styled.div`
  padding: 5rem;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const Footer = styled.div`
  padding: 12px 16px;
  text-align: right;
`;
