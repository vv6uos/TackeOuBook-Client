//-----import 내부
import NavButton from "./Button_nav";
//-----메인 구독 버튼
function SubscribeButton({ ...props }) {
  return (
    <NavButton color="orange" width="4rem" {...props}>
      구독
    </NavButton>
  );
}
export default SubscribeButton;
