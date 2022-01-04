import "./App.css";
import MainPage from "./main";
import UploadPage from "./upload";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./login";

function App() {
  return (
    <div>
      <div id="header">
        <img src="/images/logo4.png" alt="로고이미지" />
        <div id="menu_box">
          {/* 메뉴아이콘만들기  */}
          <img
            className="menu-button"
            src="/images/menu_button-login.jpg"
            alt="회원가입/로그인"
          />
          <img
            className="menu-button"
            src="images/menu_button-upload.jpg"
            alt="상품올리기버튼 올리기"
          />
        </div>
      </div>
      <div id="banner">
        <img src="/images/banner-002.png" alt="배너" />
      </div>
      <div id="body">
        <Routes>
          <Route exact={true} path={"/"} element={<MainPage />} />
          <Route exact={true} path={"/upload"} element={<UploadPage />} />
          <Route exact={true} path={"/login"} element={<LoginPage />} />
        </Routes>
      </div>
      <div id="foot">@s6uos ALL RIGHTS RESERVED</div>
    </div>
  );
}

export default App;
