import { useNavigate } from "react-router-dom";
import Theme from "../../style/theme";
import Button from "../../components/Button";

function NavButton({ children, moveTo, onClick }) {
  const navigate = useNavigate();
  const page = moveTo;

  const goServicePg = () => {
    navigate(page);
  };

  return (
    <Button
      onClick={onClick || goServicePg}
      color={`${colors.d1}`}
      fontFam={`${fonts.m}`}
      bgColor={`${colors.bg}`}
      bdLeft={`2px solid ${colors.d1}`}
      height="1.2rem"
      padding="0"
      margin="0.3rem 0"
    >
      {children}
    </Button>
  );
}
export default NavButton;

const { fonts, colors } = Theme;
