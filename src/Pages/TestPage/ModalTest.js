import styled from "styled-components";
import { Button } from "components";
import { myTheme } from "style";
const { fonts, colors } = myTheme;

function POPUP(props) {
  const { open, close, title, content } = props;
  return (
    <Wrapper className={open ? "openModal" : ""}>
      <Container>
        <Header>
          {title}
          <CloseButton onClick={close}>x</CloseButton>
        </Header>
        {content}{" "}
      </Container>
    </Wrapper>
  );
}

export default POPUP;

const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.6);

  &.openModal {
    display: flex;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: ${colors.bg};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1rem;
  background-color: ${colors.gray};
  font-weight: 700;
  line-height: 2rem;
`;

const CloseButton = styled.button`
  border: none;
  font-size: large;
  cursor: pointer;
`;
