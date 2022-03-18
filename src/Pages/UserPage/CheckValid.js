//-----import 외부
import axios from "axios";

//-----import 내부
import { API_URL } from "config/constants";

// -----메인 : 유효성검사
class CheckValid {
  constructor(age) {
    this.age = age;
  }
  static staticTest = (e) => {
    const { name, value } = e.target;
    console.log("staticTest:", name, "의 값은", value);
  };
  callAge = () => {
    console.log(this.age);
  };
  //비밀번호 확인 함수
  static confirmPw = (inputs, setInputs) => {
    const { password, chkPassword } = inputs;
    if (password.valid) {
      if (password.value !== chkPassword.value) {
        setInputs({
          ...inputs,
          chkPassword: {
            value: chkPassword.value,
            valid: false,
            errMessage: "불일치",
          },
        });
      } else {
        setInputs({
          ...inputs,
          chkPassword: {
            value: chkPassword.value,
            valid: true,
            errMessage: "",
          },
        });
      }
    }
  };

  //input이 포커스를 잃었을때 하는 검증 함수
  static onBlur = (e, inputs, setInputs) => {
    const { name, value } = e.target;
    //함수: 요소의 value가 유효하지 않은 상태를 Inputs에 저장하는 함수
    const setInv = (name, value, $errMessage) => {
      //name과 동일한 inputs의 key를 가진 요소를 찾아 valid값을 false로 바꾸고 오류메세지 저장
      setInputs({
        ...inputs,
        [name]: {
          value,
          valid: false,
          errMessage: $errMessage,
        },
      });
    };
    //함수 : 요소의 value가 유효하다는 상태를 Inputs에 저장하는 함수
    const setValid = (name, value) => {
      //name과 동일한 inputs의 key를 가진 요소를 찾아 valid값을 true, 오류메세지 제거
      setInputs({
        ...inputs,
        [name]: {
          value,
          valid: true,
          errMessage: "",
        },
      });
    };

    const isNull = () => {
      if (value.length === 0) return true;
    };
    switch (name) {
      case "id":
      case "name":
        if (isNull()) {
          return setInv(name, value, "필수 정보입니다");
        } else return setValid(name, value);
      case "password":
      case "chkPassword":
        if (isNull()) {
          return setInv(name, value, "필수 정보입니다");
        } else {
          return setValid(name, value);
        }

      default:
    }

    console.log("onBlur일때 value검증");
  };

  //input이 value가 바뀔 때 하는 검증 함수
  static onChange = (e, inputs, setInputs) => {
    const { name, value } = e.target;
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

    const setInv = (name, value, $errMessage) => {
      //name과 동일한 inputs의 key를 가진 요소를 찾아 valid값을 false로 바꾸고 오류메세지 저장
      setInputs({
        ...inputs,
        [name]: {
          value,
          valid: false,
          errMessage: $errMessage,
        },
      });
    };

    //함수 : 요소의 value가 유효하다는 상태를 Inputs에 저장하는 함수
    const setValid = (name, value) => {
      //name과 동일한 inputs의 key를 가진 요소를 찾아 valid값을 true, 오류메세지 제거
      setInputs({
        ...inputs,
        [name]: {
          value,
          valid: true,
          errMessage: "",
        },
      });
    };
    const isAlreadyExistId = () => {
      axios
        .post(`${API_URL}/register/checkId`, {
          user_id: value,
        })
        .then((result) => {
          if (result.data) {
            setValid(name, value);
          } else {
            setInv(name, value, "사용중인 아이디입니다");
          }
        })
        .catch((err) => {
          console.log("REGISTER isAlreadyExistID POST :ERROR");
        });
    };
    switch (name) {
      case "id":
        if (!idJ.test(value)) {
          return setInv(name, value, "6~15자의 영어 소문자, 숫자 사용해주세요");
        }
        isAlreadyExistId();

      case "name":
        return setValid(name, value);

      case "password":
        if (!pwJ.test(value)) {
          return setInv(name, value, "4~15자 영어,숫자를 사용해주세요");
        } else {
          return setValid(name, value);
        }
      case "email":
        if (mailJ.test(value)) {
          return setValid(name, value);
        } else {
          return setInv(name, value, "양식에 맞게 입력해주세요('@'포함)");
        }
        break;
      case "name":
        if (!nameJ.test(value)) {
          return setInv(name, value, "2~30자의 한글,숫자로 입력해주세요");
        }
      case "phoneNumber":
        if (!phoneJ.test(value)) {
          return setInv(name, value, "'01-'로 시작하고 숫자만 사용해주세요");
        }
      default:
        return setValid(name, value);
    }
  };
}

export default CheckValid;
