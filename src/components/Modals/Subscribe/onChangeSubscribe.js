//-----import 외부
import axios from "axios";
//-----import 내부
import { API_URL } from "config/constants";

//-----메인 구독자=>구독취소  비구독자=>구독하기 로 정보변경하는 함수 
function onChangeSubscribe(id, $subscribe) {
  //props 에서 받아온 유저의 구독정보에 따라 메시지와 변경될 구독 정보 서버에 전달해서 변경 
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
