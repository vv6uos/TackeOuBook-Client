//-----import 외부
import { useNavigate } from "react-router-dom";
//-----import 내부 
import { myTheme } from "style";
import { Button } from "components";
//-----메인 네비게이션에서 원하는 페이지로 이동하게 만드는 버튼 컴포넌트 
function NavButton({ children, moveTo, onClick, width, color, ...props }) {
  const navigate = useNavigate();
  const { fonts, colors } = myTheme;

  const page = moveTo;
  const fontColor = color;
  const $width = width;

  const goServicePg = () => {
    navigate(page);
  };

  return (
    <Button
      onClick={onClick || goServicePg}
      color={fontColor || colors.d1}
      fontFam={`${fonts.m}`}
      bgColor={`${colors.bg}`}
      bdLeft={`2px solid ${colors.d1}`}
      height="1.2rem"
      width={$width || "6rem"}
      padding="0"
      margin="0 0.5rem 0 0"
      {...props}
    >
      {children}
    </Button>
  );
}
export default NavButton;
