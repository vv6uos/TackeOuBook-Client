import axios from "axios";
import { Button } from "components";
import { API_URL } from "config/constants";
import ButtonDisabledTestArea from "./ButtonTest";

function TestPage() {
  return (
    <>
      <ButtonDisabledTestArea />
      <Button onClick={testSession}>세션만들기</Button>
      <Button onClick={loadTestSession}>세션가져오기</Button>
      <Button onClick={findUserTest}>유저찾기</Button>
    </>
  );
}

const testSession = () => {
  console.log("클릭완료");
  axios
    .get(`${API_URL}/test/createSession`, { withCredentials: true })
    .then((result) => {
      console.log("SESSION TEST 응답결과", result.data);
    })
    .catch((err) => {
      console.log("SESSION TEST AXIOS ERROR");
    });
};
const loadTestSession = () => {
  console.log("세션을 불러와!");
  axios
    .get(`${API_URL}/test/loadSession`, { withCredentials: true })
    .then((result) => {
      console.log("loadSESSION TEST 응답결과", result.data);
    })
    .catch((err) => {
      console.log("SESSION TEST AXIOS ERROR");
    });
};

const findUserTest = () => {
  console.log("유저정보 찾는 POST TEST 버튼 클릭 ! 함수실행!");
  axios
    .post(
      `${API_URL}/test/findUser`,
      {
        user_id: "user02",
        password: "2222",
      },
      { withCredentials: true }
    )
    .then((result) => {
      console.log("FIND USER 통신 결과", result.data);
    })
    .catch((err) => {
      console.log(" FIND USER : AXIOS 실패 ");
    });
};

//버튼 클릭시 세션 불러오기 기능
//user find post 기능 되는지 확인

export default TestPage;
