//-----import 외부 소스
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

//-----import 내부 소스
import { InputWithLabel, Button } from "components/index";
import { myCSS, myTheme } from "style/index";
import { API_URL } from "config/constants";
import { chkNull, chkLetter } from "./registerValid/index.js";

const { colors, fontStyles } = myTheme;

// 메인 컴포넌트
function RegisterPage() {
  const [inputs, setInputs] = useState({
    id: {
      value: "",
      valid: false,
      errMessage: "",
    },
    password: {
      value: "",
      valid: false,
      errMessage: "",
    },
    chkPassword: {
      value: "",
      valid: false,
      errMessage: "",
    },
    name: {
      value: "",
      valid: false,
      errMessage: "",
    },
    email: {
      value: "",
      valid: true,
      errMessage: "",
    },
    address: {
      value: "",
      valid: true,
      errMessage: "",
    },
    phoneNumber: {
      value: "",
      valid: true,
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
        valid: false,
        errMessage: $errMessage,
      },
    });
  };
  const setValid = (inputs, name, value) => {
    setInputs({
      ...inputs,
      [name]: {
        value,
        valid: true,
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
      id.valid &&
      password.valid &&
      chkPassword.valid &&
      name.valid &&
      email.valid &&
      address.valid &&
      phoneNumber.valid
    ) {
      result = false;
    }
    return Boolean(result);
  };
  const onSubmit = (e) => {
    console.log("제출중....", inputs);

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
        console.log("REGISTER AXIOS POST : SUCCESS");
        if (!result.data.result) {
          console.log(result.data.err);
          alert("회원가입에 실패했습니다.");
          window.location.reload();
        } else {
          alert("회원가입을 축하드립니다.");
          window.location.replace("/login");
        }
      })
      .catch((err) => {
        console.log("REGISTER AXIOS POST : ERROR");
        alert("다시 시도 부탁드립니다.");
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit} id="form">
        <Title>회원가입</Title>

        <Input name="id" type="text" onBlur={onBlur} onChange={onChange}>
          아이디
        </Input>

        <Message>{id.errMessage}</Message>
        <Input
          name="password"
          type="password"
          onBlur={onBlur}
          onChange={onChange}
        >
          비밀번호
        </Input>
        <Message>{password.errMessage}</Message>
        <Input
          name="chkPassword"
          type="password"
          onBlur={onBlur}
          onChange={onChange}
        >
          비밀번호 확인
        </Input>
        <Message>{chkPassword.errMessage}</Message>
        <Input name="name" type="text" onBlur={onBlur} onChange={onChange}>
          이름
        </Input>
        <Message>{name.errMessage}</Message>
        <Input
          type="email"
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          placeholder="예) book@book.cr"
        >
          이메일(선택)
        </Input>
        <Message>{email.errMessage}</Message>
        <Input type="text" name="address" onChange={onChange} onBlur={onBlur}>
          주소(선택)
        </Input>
        <Message>{address.errMessage}</Message>
        <Input
          type="tel"
          name="phoneNumber"
          onChange={onChange}
          onBlur={onBlur}
          placeholder="'-'하이픈없이 숫자만 예) 01029493424"
        >
          연락처(선택)
        </Input>
        <Message>{phoneNumber.errMessage}</Message>
        <Button
          onClick={onSubmit}
          disabled={onDisabled()}
          width="25rem"
          maxWidth="400px"
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

  background-color: ${colors.l1};

  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 2rem;
  border-radius: 5% 5%;
`;

const Form = styled.form`
  ${myCSS.flexColumn}
  align-items: center;
`;

const Title = styled.div`
  ${fontStyles.semiTitle}
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${colors.m1};
`;
const IdBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

function Input({ children, InvalidMessage, $Valid, ...rest }) {
  return (
    <InputWithLabel
      labelWidth="10rem"
      flexDirection="column"
      itemHeight="4.2rem"
      inputWidth="24rem"
      $Valid={$Valid}
      InvalidMessage={InvalidMessage}
      {...rest}
    >
      {children}
    </InputWithLabel>
  );
}

const Message = styled.div`
  width: 24rem;
  color: ${colors.m2};
  margin-bottom: 1rem;
  height: 1rem;
`;
