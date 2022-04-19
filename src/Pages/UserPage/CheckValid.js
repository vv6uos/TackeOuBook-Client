//-----import 외부
import axios from "axios";

//-----import 내부
import { API_URL } from "config/constants";

// -----메인 : 유효성검사
class CheckValid {
  constructor(inputs, setInputs) {
    this.inputs = inputs;
    this.setInputs = setInputs;
  }

  setInv = (name, value, $errMessage) => {
    //name과 동일한 inputs의 key를 가진 요소를 찾아 valid값을 false로 바꾸고 오류메세지 저장
    this.setInputs({
      ...this.inputs,
      [name]: {
        value,
        valid: false,
        errMessage: $errMessage,
      },
    });
  };
  //함수 : 요소의 value가 유효하다는 상태를 Inputs에 저장하는 함수
  setValid = (name, value) => {
    //name과 동일한 inputs의 key를 가진 요소를 찾아 valid값을 true, 오류메세지 제거
    this.setInputs({
      ...this.inputs,
      [name]: {
        value,
        valid: true,
        errMessage: "",
      },
    });
  };

  //비밀번호 확인 함수
  confirmPw = () => {
    const { password, chkPassword } = this.inputs;
    if (password.valid) {
      if (password.value !== chkPassword.value) {
        return this.setInv(
          "chkPassword",
          chkPassword.value,
          "비밀번호가 일치하지 않습니다."
        );
      } else {
        return this.setValid("chkPassword", chkPassword.value);
      }
    }
  };

  //input이 포커스를 잃었을때 하는 검증 함수
  //필수입력란을 공란으로 뒀을때 발동
  onBlur = (e) => {
    const { name, value } = e.target;
    const isNull = () => {
      if (value.length === 0) return true;
    };

    switch (name) {
      case "id":
      case "name":
        if (isNull()) {
          return this.setInv(name, value, "필수 정보입니다");
        }
        break;
      case "password":
      case "chkPassword":
        if (isNull()) {
          return this.setInv(name, value, "필수 정보입니다");
        }
        break;

      default:
        return this.setValid(name, value);
    }
  };

  //input이 value가 바뀔 때 하는 검증 함수
  //양식검사,아이디 중복확인
  onChange = (e) => {
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
    const nameJ = /^[가-힣0-9]{2,15}$/;

    const isAlreadyExistId = () => {
      axios
        .post(`${API_URL}/user/read/userId`, {
          user_id: value,
        })
        .then((result) => {
          const response = result.data;
          console.log("USER/READ/USERID RESPONSE : ", response);
          if (response.answer) {
            return this.setInv(name, value, "사용중인 아이디입니다");
          } else {
            return this.setValid(name, value);
          }
        })
        .catch((err) => {
          alert("회원가입 서버오류 : 잠시 후에 시도 부탁드립니다");
        });
    };
    switch (name) {
      case "id":
        if (!idJ.test(value)) {
          return this.setInv(
            name,
            value,
            "6~15자의 영어 소문자, 숫자 사용해주세요"
          );
        } else {
          isAlreadyExistId();
          break;
        }
      case "name":
        if (!nameJ.test(value)) {
          return this.setInv(name, value, "2~15자 한글,숫자를 사용해주세요");
        } else return this.setValid(name, value);

      case "password":
        if (!pwJ.test(value)) {
          return this.setInv(name, value, "4~15자 영어,숫자를 사용해주세요");
        } else return this.setValid(name, value);
      case "email":
        if (!mailJ.test(value)) {
          return this.setInv(name, value, "양식에 맞게 입력해주세요('@'포함)");
        } else return this.setValid(name, value);

      case "phoneNumber":
        if (!phoneJ.test(value)) {
          return this.setInv(
            name,
            value,
            "'01-'로 시작하고 숫자만 사용해주세요"
          );
        } else return this.setValid(name, value);
      default:
        return this.setValid(name, value);
    }
  };
}

export default CheckValid;
