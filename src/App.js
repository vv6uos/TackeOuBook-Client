//-----import 외부 소스
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "config/constants";

//-----import 내부
import {
  MainPage,
  LoginPage,
  DetailPage,
  RegisterPage,
  UploadPage,
  TestPage,
  Header,
} from "Pages/index";
import { myCSS, myTheme, GlobalStyle } from "style/index";

const { colors } = myTheme;

function App() {
  const [isMember, setIsMember] = useState({
    logged: false,
    id: "",
    name: "익명",
  });
  useEffect(() => {
    axios
      .get(`${API_URL}/loginCheck`, { withCredentials: true })
      .then((result) => {
        if (result.data.loggedIn) {
          setIsMember({
            logged: result.data.loggedIn,
            id: result.data.loginData.user_id,
            name: result.data.loginData.user_name,
          });
        }
      })
      .catch((err) => {
        console.log("axios실패");
      });
  }, []);
  console.log(isMember.name, "의 사용자가 사용중...");

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header isMember={isMember} />
        <Body>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/upload"} element={<UploadPage />} />
            <Route path={"/books/:id"} element={<DetailPage />} />
            <Route path={"/test"} element={<TestPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
          </Routes>
        </Body>
        <Footer>@s6uos ALL RIGHTS RESERVED</Footer>
      </Wrapper>
    </>
  );
}
export default App;

//-----스타일
const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 300px;

  ${myCSS.center}
  ${myCSS.flexColumn}
`;

const Footer = styled.footer`
  height: 8rem;
  color: white;
  background-color: ${colors.d1};
`;
const Body = styled.div`
  min-height: 90vh;
`;
