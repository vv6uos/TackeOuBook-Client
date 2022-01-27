import styled from "styled-components";
import Theme from "style/theme";
import Input from "components/styled/Input";
import Button from "components/styled/Button";

const { colors, fontStyles } = Theme;

function LoginPage() {
  return (
    <Box>
      <Container>
        <Title>로그인</Title>
        <Form>
          <Input>아이디</Input>
          <Input type="password">비밀번호</Input>
          <Button width="20rem" maxWidth="250px">
            로그인
          </Button>
        </Form>
        <Nav>| 회원가입</Nav>
      </Container>
    </Box>
  );
}

export default LoginPage;

const Box = styled.div`
  max-width: 26.6rem;

  background-color: ${colors.c2};

  margin-left: auto;
  margin-right: auto;

  margin-top: 5rem;
  padding: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  ${fontStyles.semiTitle}
`;

const Nav = styled.div`
  ${fontStyles.body};
  align-self: flex-end;
  margin: 0.4rem;
`;
