//-----import 외부
import axios from "axios";
//-----import 내부
import { API_URL } from "config/constants";

//-----메인 구독자=>구독취소 , 비구독자=>구독자로 상태가 변경
function changeSubscribeStatus(userId, isMemberSubscribe) {
  //구독취소하려는 회원
  const toCancel = {
    subscribeStatusToChange: false,
    alertMsg: "구독이 취소되었습니다",
  };
  //구독하려는 회원
  const toSubscribe = {
    subscribeStatusToChange: true,
    alertMsg: "구독해주셔서 감사합니다",
  };
  //회원의 구독상태에 따라 회원의 행동을 결정
  const member = isMemberSubscribe ? toCancel : toSubscribe;

  axios
    .post(
      `${API_URL}/user/update/subscribe`,
      {
        userId,
        subscribeStatusToChange: member.subscribeStatusToChange,
      },
      { withCredentials: true }
    )
    .then((result) => {
       const response = result.data;
       console.log("USER/UPDATE:subscribe RESPONSE : ", response);
          if (response.answer) {
            alert(member.alertMsg);
            window.location.reload();
          } else {
            console.log(response.msg);
          }
    })
    .catch((err) => {
     console.log(" **FAIL : USER/UPDATE:subscribe REQUEST");
     alert("유저 구독 서버 관리자에게 문의 부탁드립니다");
      window.location.reload(true);
    });
}

export default changeSubscribeStatus;
