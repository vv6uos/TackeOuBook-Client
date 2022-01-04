import "./App.css";
import MainPage from "./main";
import UploadPage from "./upload";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./login";
import React from "react";

function App() {
  const movePage = function () {
    console.log("페이지이동");
  };
  return (
    <div>
      <div id="header">
        <Link to="/" onClick={movePage}>
          <img id="logo" src="/images/logo4.png" alt="로고이미지" />
        </Link>
        <div id="menu_box">
          {/* 메뉴아이콘만들기  */}
          <Link to="/login">
            <img
              className="menu-button"
              src="/images/menu_button-login.jpg"
              alt="회원가입/로그인"
            />
          </Link>
          <Link to="/upload">
            <img
              className="menu-button"
              src="images/menu_button-upload.jpg"
              alt="상품올리기버튼 올리기"
            />
          </Link>
        </div>
      </div>
      <div id="banner">
        <img src="/images/banner-002.png" alt="배너" />
      </div>
      <div id="body">
        <Routes>
          <Route path={"/upload"} element={<UploadPage />} />
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/login"} element={<LoginPage />} />
        </Routes>
      </div>
      <div id="foot">@s6uos ALL RIGHTS RESERVED</div>
    </div>
  );
}

export default App;
