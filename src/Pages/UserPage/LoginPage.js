//-----import 외부
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

//-----import 내부
import { myCSS, myTheme } from "style/index";
import { API_URL } from "config/constants";
import { InputWithLabel, Button } from "components/index";

//-----메인
function LoginPage({ isLogin }) {
  //로그인이 되어있을 시 로그인 페이지에서 메인페이지로 이동하게 함
  if (isLogin) {
    window.location.replace("/");
  }
  //State : input의 value를 저장하기 위한 state
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  //이벤트함수: input의 value가 바뀔때마다 value를 inputs 저장=
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  //이벤트함수: 로그인 버튼 클릭시 정보가 유효한지 확인하고 userSession을 생성
  const onSubmit = (e) => {
    axios
      .get(
        `${API_URL}/loginSession/create?userId=${inputs.id}&password=${inputs.password}`,
        { withCredentials: true }
      )
      .then((result) => {
        const response = result.data;
        if (!response.answer) {
          alert("아이디와 비밀번호를 확인 부탁드립니다.");
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(
          "잠시 후 시도 부탁드립니다. 반복되는 오류에는 서버관리자에게 문의 부탁드립니다."
        );
      });
  };

  //-----메인
  return (
    <Wrapper>
      <Container>
        <Title>로그인</Title>
        <Form>
          <InputWithLabel type="text" name="id" onChange={onChange} required>
            아이디
          </InputWithLabel>
          <InputWithLabel
            type="password"
            name="password"
            onChange={onChange}
            required
            autoComplete="off"
          >
            비밀번호
          </InputWithLabel>
          <Button
            type="submit"
            onClick={onSubmit}
            width="20rem"
            maxWidth="250px"
          >
            로그인
          </Button>
        </Form>
        <LinktoRegister to="/register">회원가입</LinktoRegister>
      </Container>
    </Wrapper>
  );
}

export default LoginPage;

//-----스타일
const { colors, fontStyles } = myTheme;
const Wrapper = styled.div`
  ${myCSS.center}
  width: 26.6rem;

  background-color: ${colors.l1};
  border-radius: 5% 5%;

  margin: auto;
  margin-top: 5rem;
  padding: 2rem;
`;
const Container = styled.div`
  ${myCSS.flexColumn}
  align-items: center;
`;
const Form = styled.form`
  ${myCSS.flexColumn}
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
const Title = styled.div`
  ${fontStyles.semiTitle}
`;
const LinktoRegister = styled(Link)`
  ${fontStyles.mini};
  align-self: flex-end;
  margin: 0.4rem;
  text-decoration: none;
`;
