import NavButton from "Pages/Header/Button_Nav";

function DefaultNav() {
  return (
    <>
      <NavButton moveTo="/login">로그인</NavButton>
      <NavButton moveTo="/register">회원가입</NavButton>
      <NavButton moveTo="/login">구독하기</NavButton>
    </>
  );
}

export default DefaultNav;
