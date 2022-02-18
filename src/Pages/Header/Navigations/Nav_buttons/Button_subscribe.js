import NavButton from "./Button_nav";

function SubscribeButton({ ...props }) {
  return (
    <NavButton color="orange" width="4rem" {...props}>
      구독
    </NavButton>
  );
}
export default SubscribeButton;
