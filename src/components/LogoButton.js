import { useNavigate } from "react-router-dom";
import Theme from "../style/theme";
import Button from "./styled/Button";

const { fonts } = Theme;

function LogoButton() {
  const navigate = useNavigate();
  return (
    <Button
      width="20rem"
      maxWidth="300px"
      minWidth="190px"
      fontFam={fonts.l}
      fontSize="4rem"
      onClick={() => {
        navigate("/");
      }}
    >
      송은도서관
    </Button>
  );
}
export default LogoButton;
