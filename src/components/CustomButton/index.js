import { BaseButton, SuccessButton, DangerButton } from "./styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  success: "success",
  danger: "danger"
};

const getButtonClass = (name = BUTTON_TYPE_CLASSES.base) => ({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.success]: SuccessButton,
  [BUTTON_TYPE_CLASSES.danger]: DangerButton
}[name]);

const CustomButton = ({ name, type, onClick, children }) => {
  const ButtonClass = getButtonClass(name);
  return (
    <ButtonClass type={type} onClick={onClick}>
      {children}
    </ButtonClass>
  );
};

export default CustomButton;
