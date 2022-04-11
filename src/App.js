// 개인프로젝트,이송은
// 도서 대여 플랫폼 제작

//-----import 외부 소스
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

//-----import 내부
import { myCSS, myTheme, GlobalStyle } from "style/index";
import { API_URL } from "config/constants";
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
import { logout } from "function";

//-----메인
function App() {
  //state : 로그인 유무와 로그인한 user정보를 담음
  const [user, setUser] = useState({
    isLogin: false,
    id: "",
    name: "익명",
    isSubscriber: false,
  });
  //함수 : 서버에서 로그인을 확인 후 로그인한 유저정보를 받아옴
  useEffect(() => {
    axios
      .get(`${API_URL}/userSession`, { withCredentials: true })
      .then((result) => {
        const response = result.data;
        console.log("USER_SESSION RESPONSE : ", response);
        if (response.answer) {
          const user = response.user;
          setUser({
            isLogin: user.isLogin,
            id: user.id,
            name: user.name,
            isSubscriber: user.isSubscriber,
          });
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : USER_SESSION REQUEST");
      });
    //브라우저 창이 닫히면 로그아웃처리
    window.addEventListener("unload", logout);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header user={user} />
        <Body onU="closeApp()">
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/upload"} element={<UploadPage />} />
            <Route path={"/books/:id"} element={<DetailPage user={user} />} />
            <Route path={"/test"} element={<TestPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
            <Route path={"/mypage/*"} element={<MyPage user={user} />} />
          </Routes>
        </Body>
        <Footer>@s6uos ALL RIGHTS RESERVED</Footer>
      </Wrapper>
    </>
  );
}
export default App;

//-----스타일
const { colors } = myTheme;
const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 300px;

  ${myCSS.center}
  ${myCSS.flexColumn}
`;

const Footer = styled.footer`
  height: 6rem;
  color: white;
  background-color: ${colors.d1};
`;
const Body = styled.div`
  min-height: 90vh;
  font-size: 1em;
`;
