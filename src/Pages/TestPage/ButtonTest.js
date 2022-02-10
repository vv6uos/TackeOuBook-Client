import { Button } from "components";
import styled from "styled-components";

function ButtonDisabledTestArea() {
  return (
    <Wrapper>
      <h1>
        이 버튼의 disabeled 속성이 "true or false" 로 움직이는 확인하는 테스트
        Area입니다.
      </h1>
      <Button
        disabled={false}
        onClick={() => {
          console.log("활성화 성공");
        }}
      >
        abled
      </Button>
      <Button
        disabled={true}
        onClick={() => {
          console.log("버튼 활성화");
        }}
      >
        disabled
      </Button>
    </Wrapper>
  );
}

export default ButtonDisabledTestArea;

const Wrapper = styled.div`
  width: 100%;
`;
