//-----import 외부 소스
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

//-----import 내부 소스
import { InputWithLabel, Button } from "components/index";
import { myCSS, myTheme } from "style/index";
import { API_URL } from "config/constants";
import { chkNull, chkLetter, matchPw } from "./registerValid/index.js";

const { colors, fontStyles } = myTheme;

// 메인 컴포넌트
function RegisterPage() {
  const [inputs, setInputs] = useState({
    id: {
      value: "",
      valid: "",
      errMessage: "",
    },
    password: {
      value: "",
      valid: "",
      errMessage: "",
    },
    chkPassword: {
      value: "",
      valid: "",
      errMessage: "",
    },
    name: {
      value: "",
      valid: "",
      errMessage: "",
    },
    email: {
      value: "",
      valid: "valid",
      errMessage: "",
    },
    address: {
      value: "",
      valid: "valid",
      errMessage: "",
    },
    phoneNumber: {
      value: "",
      valid: "valid",
      errMessage: "",
    },
  });
  const { id, password, chkPassword, name, email, address, phoneNumber } =
    inputs;
  const setInv = (inputs, name, value, $errMessage) => {
    setInputs({
      ...inputs,
      [name]: {
        value,
        valid: "invalid",
        errMessage: $errMessage,
      },
    });
  };
  const setValid = (inputs, name, value) => {
    setInputs({
      ...inputs,
      [name]: {
        value,
        valid: "valid",
        errMessage: "",
      },
    });
  };
  const onBlur = (e) => {
    const { name } = e.target;
    chkNull(e, inputs, setInv, setValid);
    console.log("입력 끝....onBlur");
    console.log(name, ":", inputs[name]);
    console.log("");
  };
  const onChange = (e) => {
    console.log("회원가입 폼 입력중....");
    chkLetter(e, inputs, setInv, setValid);
  };

  const onDisabled = () => {
    let result = true;
    if (
      id.valid === "valid" &&
      password.valid === "valid" &&
      chkPassword.valid === "valid" &&
      name.valid === "valid" &&
      email.valid === "valid" &&
      address.valid === "valid" &&
      phoneNumber.valid === "valid"
    ) {
      result = false;
    }
    return Boolean(result);
  };
  const onSubmit = (e) => {
    console.log("제출중....", inputs);

    e.preventDefault();
    axios
      .post(`${API_URL}/users/register`, {
        user_id: id.value,
        password: password.value,
        user_name: name.value,
        address: address.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
      })
      .then((result) => {
        console.log("REGISTER AXIOS POST :SUCCESS");
      })
      .catch((err) => {
        console.log("REGISTER AXIOS POST :ERROR");
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit} id="form">
        <Title>회원가입</Title>
        <Input
          name="id"
          type="text"
          InvalidMessage={id.errMessage}
          onBlur={onBlur}
          onChange={onChange}
        >
          아이디
        </Input>

        <Input
          name="password"
          type="password"
          InvalidMessage={password.errMessage}
          onBlur={onBlur}
          onChange={onChange}
        >
          비밀번호
        </Input>
        <Input
          name="chkPassword"
          type="password"
          InvalidMessage={chkPassword.errMessage}
          onBlur={onBlur}
          onChange={onChange}
        >
          비밀번호 확인
        </Input>
        <Input
          name="name"
          type="text"
          InvalidMessage={name.errMessage}
          onBlur={onBlur}
          onChange={onChange}
        >
          이름
        </Input>
        <Input
          type="email"
          name="email"
          InvalidMessage={email.errMessage}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="예) book@book.cr"
        >
          이메일(선택)
        </Input>
        <Input
          type="text"
          name="address"
          InvalidMessage={address.errMessage}
          onChange={onChange}
          onBlur={onBlur}
        >
          주소(선택)
        </Input>
        <Input
          type="tel"
          name="phoneNumber"
          InvalidMessage={phoneNumber.errMessage}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="'-'하이픈없이 숫자만 예) 01029493424"
        >
          연락처(선택)
        </Input>
        <Button
          type="button"
          onClick={onSubmit}
          disabled={onDisabled()}
          width="20rem"
          maxWidth="250px"
        >
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
  margin-bottom: 5rem;
  padding: 2rem;
`;

const Form = styled.form`
  ${myCSS.flexColumn}
  align-items: center;
`;

const Title = styled.div`
  ${fontStyles.semiTitle}
  margin-bottom: 2rem;
`;

function Input({ children, InvalidMessage, $Valid, ...rest }) {
  return (
    <InputWithLabel
      labelWidth="10rem"
      flexDirection="column"
      itemHeight="5.5rem"
      inputWidth="20rem"
      $Valid={$Valid}
      InvalidMessage={InvalidMessage}
      {...rest}
    >
      {children}
    </InputWithLabel>
  );
}
