import { matchPw } from "./index";
function chkNull(e, inputs, setInv, setValid) {
  const errMsg = "필수 정보입니다.";
  const errMsg_chkPw = "비밀번호 확인이 필요합니다.";
  const { name, value } = e.target;
  if (value.length === 0) {
    switch (name) {
      case "id":
      case "password":
      case "name":
        setInv(inputs, name, value, errMsg);
        break;
      case "chkPassword":
        setInv(inputs, name, value, errMsg_chkPw);
        break;
      default:
        setValid(inputs, name, value);
        break;
    }
  } else {
    matchPw(
      inputs,
      inputs.password.value,
      inputs.chkPassword.value,
      setInv,
      setValid
    );
  }
  console.log(name, "CHKNULL: ", inputs[name].valid);
  return;
}
export default chkNull;
