//-----import 외부
import axios from "axios";

//-----import 내부
import { API_URL } from "config/constants";
import { chkNull } from "./index";

//아이디 정규식
const idJ = /^[a-z0-9]{6,15}$/;
// 비밀번호 정규식
const pwJ = /^[A-Za-z0-9]{4,15}$/;
// 이메일 검사 정규식
const mailJ =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// 휴대폰 번호 정규식
const phoneJ = /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/;
// 이름 정규식
const nameJ = /^[가-힣0-9]{2,30}$/;

// -----메인 : 양식검사 
function chkLetter(e, setInv, setValid) {
  const { name, value } = e.target;
  switch (name) {
    case "id":
      //아이디가 양식검사에서 통과하면 중복체크 검사를 실행
      if (idJ.test(value)) {
        //userDB에 동일한 아이디가 있는지 체크하고 결과에 따라 valid상태바꾸기
        axios
          .post(`${API_URL}/register/checkId`, {
            user_id: value,
          })
          .then((result) => {
            console.log("REGISTER IDdbChk POST: SUCCESS", result.data);
            if (result.data) {
              setValid(name, value);
            } else {
              setInv(name, value, "사용중인 아이디입니다.");
            }
          })
          .catch((err) => {
            console.log("REGISTER IDdbChk POST :ERROR");
          });
      } else {
        setInv(name, value, "6~15자의 영어 소문자, 숫자 사용해주세요");
      }
      break;
    case "password":
      if (!pwJ.test(value)) {
        setInv(name, value, "4~15자 영어,숫자를 사용해주세요");
      } else setValid(name, value);
      break;

    case "email":
      if (mailJ.test(value)) {
        setValid(name, value);
      } else {
        setInv(name, value, "양식에 맞게 입력해주세요('@'포함)");
      }
      break;
    case "name":
      if (nameJ.test(value)) {
        setValid(name, value);
      } else {
        setInv(name, value, "2~30자의 한글,숫자로 입력해주세요");
      }
      break;
    case "phoneNumber":
      if (phoneJ.test(value)) {
        setValid(name, value);
      } else {
        setInv(name, value, "'01-'로 시작하고 숫자만 사용해주세요");
      }
      break;
    default:
      chkNull(e, setInv, setValid);
      break;
  }
}

export default chkLetter;
