import { useNavigate } from "react-router-dom";
import Button from "./Button";

function MenuButton({ children, moveTo }) {
  const navigate = useNavigate();
  const page = moveTo;
  const goServicePg = () => {
    navigate(page);
  };

  return <Button onClick={goServicePg}>{children}</Button>;
}

export default MenuButton;
