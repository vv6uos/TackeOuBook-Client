//import
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "config/constants";

//function

function SessionTest() {
  useEffect(() => {
    axios
      .get(`${API_URL}/loginCheck`, { withCredentials: true })
      .then((result) => {
        console.log("로그인여부 확인중");
        console.log("멤버?", result.data);
      })
      .catch((err) => {
        console.log("axios실패");
      });
  }, []);
  return (
    <Wrapper>
      <h1>session값을 잘 받아 오는지 확인하는 테스트 입니다 </h1>
      <div></div>
    </Wrapper>
  );
}

export default SessionTest;
const Wrapper = styled.div`
  width: 100%;
  background-color: #a9c0cc;
`;
