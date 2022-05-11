//-----import 외부 소스
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

//-----import 내부 소스
import { myCSS, myTheme } from "style/index";
import { API_URL } from "config/constants";
import { InputWithLabel, Button } from "components/index";
import CheckValid from "./CheckValid.js";

//-----메인
function RegisterPage() {
  //State : input의 value,valid,errmessage를 저장함
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
  //변수: inputs의  key와 value를 각각 저장
  const { id, password, chkPassword, name, email, address, phoneNumber } =
    inputs;
  //유효성검사를 위한 CheckValid 인스턴스 생성
  const checkValid = new CheckValid(inputs, setInputs);
  //이벤트함수: innput이 onBlur상태일 때 유효성검사 실행
  const onBlur = (e) => {
    checkValid.onBlur(e);
    checkValid.confirmPw();
  };
  //이벤트함수: 변화하는 value값에 따른 유효성 검사 실행
  const onChange = (e) => {
    checkValid.onChange(e);
  };

  //이벤트함수 : 버튼 활성화 / 비활성화를 결정함
  const onDisabled = () => {
    //  inputs의 모든 valid가 true일 경우에만 가입하기 버튼이 활성화
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

  //이벤트함수 : 가입하기 버튼을 클릭했을 때 서버에 inputs value들을 전송 , 회원가입의 결과를 알려줌
  const onSubmit = (e) => {
    axios
      .post(`${API_URL}/user`, {
        user_id: id.value,
        password: password.value,
        user_name: name.value,
        address: address.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
      })
      .then((result) => {
        const response = result.data;
        if (response.answer) {
          console.log(response.result);
          alert("회원가입을 축하드립니다.");
          window.location.replace("/login");
        } else {
          alert("회원가입에 실패했습니다.");
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("회원가입 관리자에게 문의 부탁드립니다");
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
const { colors, fontStyles } = myTheme;
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

function Input({ children, InvalidMessage, $Valid, ...rest }) {
  return (
    <InputWithLabel
      labelWidth="10rem"
      flexDirection="column"
      itemHeight="4.2rem"
      inputWidth="24rem"
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
