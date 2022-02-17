//외부import
import { useNavigate } from "react-router-dom";

//내부 import
import { myTheme } from "style";
import { Button } from "components";

//메인
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
