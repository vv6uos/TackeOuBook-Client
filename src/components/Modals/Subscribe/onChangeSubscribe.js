import axios from "axios";
import { API_URL } from "config/constants";

function onChangeSubscribe(id, $subscribe) {
  const changeValue = $subscribe
    ? {
        msg: "구독해주셔서 감사합니다",
        subscribe: true,
      }
    : {
        msg: "정상적으로 구독 취소되었습니다.",
        subscribe: false,
      };

  axios
    .post(
      `${API_URL}/member/subscribe`,
      {
        id,
        subscribe: changeValue.subscribe,
      },
      { withCredentials: true }
    )
    .then((result) => {
      console.log("구독정보 변경 성공", result.data);
      alert(changeValue.msg);
      window.location.reload(true);
    })
    .catch((err) => {
      alert("ERROR, 잠시 후에 시도바랍니다");
      console.log("OnChangeSubscribe, Axios ERROR ");
      window.location.reload(true);
    });
}

export default onChangeSubscribe;
