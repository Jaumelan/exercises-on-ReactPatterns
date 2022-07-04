import CustomButton, { BUTTON_TYPE_CLASSES } from "../CustomButton";

const ExtensibleStyleButton = () => {
  const handleClick = () => alert("danger!");

  return (
    <CustomButton
      name={BUTTON_TYPE_CLASSES.danger}
      type="button"
      onClick={handleClick}
      children="DANGER"
    />
  );
};

export default ExtensibleStyleButton;
