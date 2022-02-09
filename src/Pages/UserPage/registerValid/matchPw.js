function matchPw(inputs, $pwVal, $chkPwVal, setInv, setValid) {
  console.log("비밀번호 일치 검증 ....");
  const name = "chkPassword";

  if ($pwVal !== $chkPwVal) {
    setInv(inputs, name, $chkPwVal, "비밀번호가 불일치합니다.");
  } else {
    setValid(inputs, name, $chkPwVal);
  }
}

export default matchPw;
