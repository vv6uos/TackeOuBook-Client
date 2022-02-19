import { Link } from "react-router-dom";
import styled from "styled-components";

import { myTheme } from "style/index";

function MyLink({ children, to, fontColor, margin }) {
  return (
    <StyledLink to={to} color={fontColor} margin={margin}>
      {children}
    </StyledLink>
  );
}
export default MyLink;

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
