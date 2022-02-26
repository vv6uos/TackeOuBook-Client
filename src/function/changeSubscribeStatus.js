//-----import 외부
import axios from "axios";
//-----import 내부
import { API_URL } from "config/constants";

//-----메인 구독자=>구독취소 , 비구독자=>구독자로 상태가 변경
function changeSubscribeStatus(memberId, isMemberSubscribe) {
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
      `${API_URL}/member/changeSubscribeStatus`,
      {
        memberId,
        subscribeStatusToChange: member.subscribeStatusToChange,
      },
      { withCredentials: true }
    )
    .then((result) => {
      console.log("구독정보 변경 성공", result.data);
      alert(member.alertMsg);
      window.location.reload(true);
    })
    .catch((err) => {
      alert("ERROR, 잠시 후에 시도바랍니다");
      console.log("OnChangeSubscribe, Axios ERROR ");
      window.location.reload(true);
    });
}

export default changeSubscribeStatus;
