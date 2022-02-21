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
  MyPage,
} from "Pages/index";
import { myCSS, myTheme, GlobalStyle } from "style/index";

const { colors } = myTheme;

function App() {
  const [isMember, setIsMember] = useState({
    login: false,
    id: "",
    name: "익명",
    subscribe: false,
  });
  useEffect(() => {
    axios
      .get(`${API_URL}/userSession`, { withCredentials: true })
      .then((result) => {
        const user = result.data.user;
        setIsMember({
          login: user.isLogin,
          id: user.id,
          name: user.name,
          subscribe: user.subscribe,
        });
      })
      .catch((err) => {
        console.log("/userSession , Axios ERROR");
      });
  }, []);

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
            <Route
              path={"/mypage/*"}
              element={<MyPage isMember={isMember} />}
            />
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
