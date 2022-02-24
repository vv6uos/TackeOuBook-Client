//필수정보에 해당하는 요소의 value가 유효하지 않은 상태로 변경
//필수정보에 해당하지 않는 요소를 유효한 상태로 변경 
function chkNull(e, setInv, setValid) {
  const { name, value } = e.target;
  if (value.length === 0) {
    switch (name) {
      case "id":
      case "password":
      case "name":
        setInv(name, value, "필수 정보입니다");
        break;
      default:
        setValid(name, value);
        break;
    }
  }
  return;
}
export default chkNull;
