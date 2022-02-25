//-----import 외부
import styled from "styled-components";
import { Link } from "react-router-dom";
//----import 내부
import { myTheme } from "style/index";

//-----메인 Link컴포넌트의 기본스타일링을 제거
function MyLink({ children, to, fontColor, margin }) {
  return (
    <StyledLink to={to} color={fontColor} margin={margin}>
      {children}
    </StyledLink>
  );
}
export default MyLink;

//-----스타일

const { colors, fontStyles } = myTheme;

const StyledLink = styled(Link)`
  &:visited {
    color: ${(p) => p.color || colors.d2};
    text-decoration: none;
  }
  ${fontStyles.smbold};
  margin: ${(p) => p.margin || "0"};

  color: ${(p) => p.color || colors.d2};
  text-decoration: none;
`;
