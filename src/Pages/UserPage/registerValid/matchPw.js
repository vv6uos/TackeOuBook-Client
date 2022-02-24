//함수 : 패스워드 일치검사 
//비밀번호를 입력하지 않았을때는 비밀번호의 공백검사만 실행
//비밀번호를 입력하고 나서부터 두 비밀번호의 일치 검사 실행 
function matchPw($pwVal, $chkPwVal, setInv, setValid) {
  if ($pwVal.length === 0) {
    setInv("password", $chkPwVal, "필수 정보입니다.");
  } else {
    if ($chkPwVal.length === 0) {
      setInv("chkPassword", $chkPwVal, "비밀번호 확인이 필요합니다");
    } else {
      if ($pwVal !== $chkPwVal) {
        setInv("chkPassword", $chkPwVal, "비밀번호가 불일치합니다.");
      } else {
        setValid("chkPassword", $chkPwVal);
      }
    }
  }
}

export default matchPw;
