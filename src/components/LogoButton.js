import Theme from "../style/theme";
import Button from "./styled/Button";

const { fonts } = Theme;

function LogoButton() {
  return (
    <Button
      width="30vw"
      maxWidth="250px"
      minWidth="190px"
      fontFam={fonts.l}
      fontSize="4rem"
      onClick={moveHome}
    >
      송은도서관
    </Button>
  );
}
function moveHome() {
  window.open("http://localhost:3000");
}

export default LogoButton;
