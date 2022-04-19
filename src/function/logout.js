//-----import 외부
import axios from "axios";

//-----import 내부
import { API_URL } from "config/constants";

//서버에서 로그인세션 삭제
function logout() {
  axios
    .get(`${API_URL}/loginSession/delete`, { withCredentials: true })
    .then((result) => {
      const response = result.data;
      if (response.answer) {
        window.location.replace("/");
      }
    });
}

export default logout;
