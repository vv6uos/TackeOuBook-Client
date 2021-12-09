import "./App.css";
import MainPage from "./main";

function App() {
  return (
    <div>
      <div id="header">
        <img src="/images/logo4.png" alt="로고이미지" />
        <div id="menu_box">
          {/* 메뉴아이콘만들기  */}
          <img alt="회원가입/로그인" />
          <img alt="상품올리기버튼 올리기" />
        </div>
      </div>
      <div id="banner">
        <img src="/images/banner-002.png" alt="배너" />
      </div>
      <div id="body">
        <MainPage />
      </div>
      <div id="foot">@s6uos ALL RIGHTS RESERVED</div>
    </div>
  );
}

export default App;
