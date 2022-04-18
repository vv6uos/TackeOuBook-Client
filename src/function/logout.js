//-----import 외부
import axios from "axios";

//-----import 내부
import { API_URL } from "config/constants";

//서버에서 유저세션 삭제
function logout() {
  axios
    .get(`${API_URL}/loginSession/delete`, { withCredentials: true })
    .then((result) => {
      const response = result.data;
      console.log("LOGIN_SESSION/DELETE RESPONSE : ", response);
      response.answer ? window.location.replace("/") : alert(response.msg);
    })
    .catch((err) => {
      console.log(" **FAIL : LOGIN_SESSION/DELETE REQUEST");
    });
}

export default logout;
