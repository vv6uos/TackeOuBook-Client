//-----import 외부
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

//-----import 내부
import { myCSS, myTheme } from "style";
import { API_URL } from "config/constants";

//----- 메인 회원의 정보수정을 제공하는 컴포넌트
function MyInfos() {
  const [myInfos, setMyInfos] = useState({
    id: "",
    name: "",
  });
  const { id } = useParams("");
  useEffect(() => {
    axios
      .get(`${API_URL}/member/${id}`)
      .then((result) => {
        const response = result.data;
        console.log("MEMBER RESPONSE : ", response);
        if (response.answer) {
          const member = response.member;
          setMyInfos({
            id: member.user_id,
            name: member.user_name,
          });
        } else {
          console.log(response.msg);
        }
      })
      .catch((err) => {
        console.log(" **FAIL : MEMBER REQUEST");
        alert("마이페이지 서버 관리자에게 문의 부탁드립니다");
      });
  }, []);
  return <Wrapper>{myInfos.id}님의 내정보 페이지 업데이트 예정입니다</Wrapper>;
}

export default MyInfos;
//----- 스타일
const Wrapper = styled.div`
  display: flex;
`;
