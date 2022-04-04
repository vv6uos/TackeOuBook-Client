import axios from "axios";
import { Button } from "components";
import { API_URL } from "config/constants";
import ButtonDisabledTestArea from "./ButtonTest";

function TestPage() {
  return (
    <>
      <ButtonDisabledTestArea />
      <Button onClick={testSession}>세션테스트</Button>
    </>
  );
}

const testSession = () => {
  console.log("클릭완료");
  axios
    .get(`${API_URL}/test`, { withCredentials: true })
    .then((result) => {
      console.log("SESSION TEST 응답결과", result.data);
    })
    .catch((err) => {
      console.log("SESSION TEST AXIOS ERROR");
    });
};

export default TestPage;
