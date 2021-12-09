import "./App.css";
import MainPage from "./main";

function App() {
  return (
    <div>
      <div id="header">
        {/* 자식속성을 활용해서 양단으로 메뉴바와 로고이미지 정렬하기 */}
        <img src="/images/logo4.png" alt="로고이미지" />
        <div id="menu_box">
          <img alt="회원가입/로그인" />
          <img alt="상품올리기버튼 올리기" />
        </div>
      </div>
      <div id="banner">
        <img alt="배너" />
      </div>
      <MainPage />
      <div id="foot">@s6uos ALL RIGHTS RESERVED</div>
    </div>
  );
}

export default App;
