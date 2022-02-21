//-----import 외부 소스
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Button } from "components";
import axios from "axios";
import { API_URL } from "config/constants";
import onChangeSubscribe from "components/Modals/Subscribe/onChangeSubscribe";

function MySubscribe({ isMember }) {
  const { id, subscribe } = isMember;
  const onCancelSubscribe = () => {
    onChangeSubscribe(id, false);
  };

  return (
    <Wrapper>
      <h1>{`나의구독 ${subscribe}`}</h1>
      <Button onClick={onCancelSubscribe}>구독취소</Button>
    </Wrapper>
  );
}

export default MySubscribe;

const Wrapper = styled.div`
  background-color: blue;
  display: flex;
`;
