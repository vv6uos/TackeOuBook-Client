//-----import 외부 소스
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "config/constants";
import { MyLink } from "components";
import { myCSS, myTheme } from "style";

function MyInfos() {
  return <Wrapper>내정보 페이지 로드</Wrapper>;
}

export default MyInfos;

const Wrapper = styled.div`
  background-color: blue;
  display: flex;
`;
