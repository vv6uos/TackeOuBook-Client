//-----import 외부
import styled from "styled-components";
//----import 내부
import { MyLink } from "components";

//-----메인 로고이미지를 받아오고 이미지 클릭시 메인페이지로 이동
function Logo() {
  return (
    <MyLink to="/">
      <LogoImg alt="로고" src="https://i.imgur.com/xxx7jH6.png" />
    </MyLink>
  );
}

export default Logo;

//-----스타일
const LogoImg = styled.img`
  height: 80%;
  margin: 1rem 1rem 0.5rem 1rem;
`;
