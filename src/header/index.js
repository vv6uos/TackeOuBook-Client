import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <div id="header">
      <Link to="/">
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
  );
}

export default Header;
