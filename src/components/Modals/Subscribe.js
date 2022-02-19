import styled from "styled-components";

import { Button } from "components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "config/constants";

function SubscribePop(props) {
  const { close, isMember } = props;
  const navigate = useNavigate();
  const onSubscribe = () => {
    if (isMember.logged) {
      axios
        .post(
          `${API_URL}/member/subscribe`,
          {
            user_id: isMember.id,
            subscribe: true,
          },
          { withCredentials: true }
        )
        .then((result) => {
          console.debug("구독정보 변경 성공", result.data);
          close();
          alert("구독해주셔서 감사합니다");
          window.location("/");
        })
        .catch((err) => {
          alert("잠시후에 시도 부탁드립니다", err);
        });
    } else {
      alert("로그인을 먼저 해주세요!");
      close();
      navigate("/login");
    }
  };
  return (
    <>
      <Main>구독하시게 되면 도서를 대여할 수 있습니다</Main>
      <Footer>
        <Button onClick={onSubscribe}>구독하기</Button>
        <Button onClick={close}>다음에</Button>
      </Footer>
    </>
  );
}

export default SubscribePop;

const Main = styled.div`
  padding: 5rem;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const Footer = styled.div`
  padding: 12px 16px;
  text-align: right;
`;
