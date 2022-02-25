//-----import 외부
import { useNavigate } from "react-router-dom";
//-----import 내부 
import { Button } from "components";
//-----메인 네비게이션에서 하나의 버튼 컴포넌트 , 클릭 시 원하는 페이지로 이동함 
function MenuButton({ children, moveTo, onClick }) {
  const navigate = useNavigate();
  const page = moveTo;

  const goServicePg = () => {
    navigate(page);
  };

  return <Button onClick={onClick || goServicePg}>{children}</Button>;
}

export default MenuButton;
