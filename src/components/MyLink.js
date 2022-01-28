import { Link } from "react-router-dom";
import styled from "styled-components";

function MyLink({ children, to }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
export default MyLink;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
