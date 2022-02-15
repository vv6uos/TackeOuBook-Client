import axios from "axios";
import { API_URL } from "config/constants";
import { chkNull, matchPw } from "./index";

const empJ = /\s/g;
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
const defaultJ = /^[가-힣0-9]{2,30}$/;
const testJ = /^[ㄱ-ㅎㅏ-ㅣ가-힣0-9!?()]{2,5}$/;

function chkLetter(e, inputs, setInv, setValid) {
  const { name, value } = e.target;
  switch (name) {
    case "id":
      if (idJ.test(value)) {
        axios
          .post(`${API_URL}/register/checkId`, {
            user_id: value,
          })
          .then((result) => {
            console.log("REGISTER IDdbChk POST: SUCCESS", result.data);
            if (result.data) {
              setValid(inputs, name, value);
            } else {
              setInv(inputs, name, value, "사용중인 아이디입니다.");
            }
          })
          .catch((err) => {
            console.log("REGISTER IDdbChk POST :ERROR");
          });
      } else {
        setInv(inputs, name, value, "6~15자의 영어 소문자, 숫자 사용해주세요");
      }
      break;
    case "password":
      if (!pwJ.test(value)) {
        setInv(inputs, name, value, "4~15자 영어,숫자를 사용해주세요");
      } else setValid(inputs, name, value);
      break;
    case "chkPassword":
      matchPw(inputs, inputs.password.value, value, setInv, setValid);
      break;
    case "email":
      if (mailJ.test(value)) {
        setValid(inputs, name, value);
      } else {
        setInv(inputs, name, value, "양식에 맞게 입력해주세요('@'포함)");
      }
      break;
    case "name":
      if (nameJ.test(value)) {
        setValid(inputs, name, value);
      } else {
        setInv(inputs, name, value, "2~30자의 한글,숫자로 입력해주세요");
      }
      break;
    case "phoneNumber":
      if (phoneJ.test(value)) {
        setValid(inputs, name, value);
      } else {
        setInv(inputs, name, value, "'01-'로 시작하고 숫자만 사용해주세요");
      }
      break;
    default:
      chkNull(e, inputs, setInv, setValid);
      break;
  }

  console.log(name, "is Checked Valid :", inputs[name].valid);
}

export default chkLetter;
