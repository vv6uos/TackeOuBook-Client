import { useNavigate } from "react-router-dom";
import Theme from "../../style/theme";
import Button from "../../components/Button";

function MenuButton({ children, moveTo, onClick }) {
  const navigate = useNavigate();
  const page = moveTo;

  const goServicePg = () => {
    navigate(page);
  };

  return <Button onClick={onClick || goServicePg}>{children}</Button>;
}
const { fonts, colors } = Theme;

export default MenuButton;
