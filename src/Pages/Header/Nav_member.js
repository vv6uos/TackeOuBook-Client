import NavButton from "Pages/Header/Button_Nav";
import { API_URL } from "config/constants";
import axios from "axios";
function MemberNav() {
  const onLogout = () => {
    axios
      .get(`${API_URL}/logout`, { withCredentials: true })
      .then((result) => {
        console.log("AXIOS LOGOUT: SUCCESS");
        console.log("로그아웃....", result.data);
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("AXIOS LOGOUT: ERROR");
      });
  };
  return (
    <>
      <NavButton moveTo="/login">구독하기</NavButton>
      <NavButton onClick={onLogout}>로그아웃</NavButton>
    </>
  );
}

export default MemberNav;
