import { useNavigate } from "react-router-dom";
import Theme from "../../style/theme";
import Button from "./Button";

function MenuButton({ children, moveTo }) {
  const navigate = useNavigate();
  const page = moveTo;
  const goServicePg = () => {
    navigate(page);
  };

  return (
    <Button onClick={goServicePg} bgColor={colors.m1}>
      {children}
    </Button>
  );
}
const { fonts, colors } = Theme;

export default MenuButton;
