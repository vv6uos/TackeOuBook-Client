//import
import styled from "styled-components";
import React, { useState } from "react";

//-----import 내부 소스
import { InputWithLabel, Button } from "components/index";
import POPUP from "./ModalTest";
import DbChkPop from "./ChkPopup";

//function

function DoubleCheck(props) {
  const [modal, setModal] = useState(false);

  const [id, setId] = useState({
    value: "",
    valid: "",
  });
  const onClosePop = () => {
    setModal(false);
  };
  const onChange = (e) => {
    const { value } = e.target;
    console.log("아이디 폼 입력중....");
    console.log("POPUP VALUE : ", modal);
    setId({
      value,
      valid: id.valid,
    });
  };
  //id값이 valid할때 중복체크 버튼이 활성화 되게 만들자
  //창으로 만들까 아님 ㅠㅠ 그냥 밑에 표시할까 고민고민고민

  return (
    <Wrapper>
      {modal && (
        <POPUP
          title="아이디 중복확인"
          open={modal}
          close={onClosePop}
          content={<DbChkPop close={onClosePop} />}
        />
      )}
      <h1>아이디 중복확인 버튼클릭시 구현되는 기능 테스트</h1>
      <form>
        <IdBox>
          <Input onChange={onChange} inputWidth="15rem">
            아이디
          </Input>
          <Button
            onClick={() => {
              setModal(true);
              console.log("팝업생성");
            }}
          >
            중복확인
          </Button>
        </IdBox>
        <Input>비밀번호</Input>
      </form>
    </Wrapper>
  );
}

export default DoubleCheck;

const Wrapper = styled.div`
  width: 100%;
  background-color: beige;
`;

const IdBox = styled.div`
  display: flex;
`;

function Input({ children, InvalidMessage, inputWidth, $Valid, ...rest }) {
  //labelwidth를 조정하는 코드 작성
  const size = inputWidth;
  const onInputWith = size ? size : "20rem";
  return (
    <InputWithLabel
      labelWidth="10rem"
      flexDirection="column"
      itemHeight="5.5rem"
      inputWidth={onInputWith}
      $Valid={$Valid}
      InvalidMessage={InvalidMessage}
      {...rest}
    >
      {children}
    </InputWithLabel>
  );
}
