//-----import 외부
import axios from "axios";

//-----import 내부
import { API_URL } from "config/constants";

//서버에서 유저세션 삭제
function logout() {
  axios
    .get(`${API_URL}/userSession/delete`, { withCredentials: true })
    .then((result) => {
      console.log("AXIOS LOGOUT: SUCCESS");
      console.log("로그아웃....", result.data);
      window.location.reload(true);
    })
    .catch((err) => {
      console.log("AXIOS LOGOUT: ERROR");
    });
}

export default logout;
