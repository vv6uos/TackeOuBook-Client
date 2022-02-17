import { Button } from "components";
import { useNavigate } from "react-router-dom";

function MenuButton({ children, moveTo, onClick }) {
  const navigate = useNavigate();
  const page = moveTo;

  const goServicePg = () => {
    navigate(page);
  };

  return <Button onClick={onClick || goServicePg}>{children}</Button>;
}

export default MenuButton;
