//-----import 외부 소스
import styled from "styled-components";
import React, { useState } from "react";

//-----import 내부 소스
import { InputWithLabel, Button } from "components/index";
import { myCSS, myTheme } from "style/index";
import axios from "axios";
import { API_URL } from "config/constants";

const { colors, fontStyles } = myTheme;

function RegisterPage() {
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const values = { id, password, name, email, address, phoneNumber };

  //Input onChange핸들러 
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onAddressHandler = (e) => {
    setAddress(e.currentTarget.value);
  };
  const onPhoneNumberHandler = (e) => {
    setPhoneNumber(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    axios
      .post(`${API_URL}/users`, {
        user_id: values.id,
        password: values.password,
        user_name: values.name,
        address: values.address,
        email: values.email,
        phoneNumber: values.phoneNumber,
      })
      .then((result) => {
        alert("회원가입을 축하합니다!");
      })
      .catch((err) => {
        alert("회원가입실패!");
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Title>회원가입</Title>
        <RegisterInput type="text" value={id} onChange={onIdHandler} required>
          아이디
        </RegisterInput>
        <RegisterInput
          type="password"
          value={password}
          onChange={onPasswordHandler}
          required
        >
          비밀번호
        </RegisterInput>
        <RegisterInput
          type="text"
          value={name}
          onChange={onNameHandler}
          required
        >
          이름
        </RegisterInput>
        <RegisterInput type="email" value={email} onChange={onEmailHandler}>
          이메일(선택)
        </RegisterInput>
        <RegisterInput type="text" value={address} onChange={onAddressHandler}>
          주소(선택)
        </RegisterInput>
        <RegisterInput
          type="text"
          value={phoneNumber}
          onChange={onPhoneNumberHandler}
        >
          연락처(선택)
        </RegisterInput>
        <Button type="submit" width="20rem" maxWidth="250px">
          가입하기
        </Button>
      </Form>
    </Wrapper>
  );
}

export default RegisterPage;

//-----스타일
const Wrapper = styled.div`
  ${myCSS.center}
  width: 40rem;

  background-color: ${colors.c2};

  margin-top: 5rem;
  padding: 2rem;
`;

const Form = styled.form`
  ${myCSS.flexColumn}
  align-items: center;
`;

const RegisterInput = ({ children, inputWidth, ...props }) => {
  const width = { inputWidth };
  return (
    <InputWithLabel
      labelWidth="20rem"
      flexDirection="column"
      itemHeight="4rem"
      inputWidth={width}
      {...props}
    >
      {children}
    </InputWithLabel>
  );
};
const Title = styled.div`
  ${fontStyles.semiTitle}
  margin-bottom: 2rem;
`;
