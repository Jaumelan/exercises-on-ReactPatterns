import CustomButton, { BUTTON_TYPE_CLASSES } from "../CustomButton";
import ExtensibleStyleButton from "../extensibleStyleButton";

const ExtensibleStyle = () => {
  return (
    <div>
      <h2>Example of extensible styled components</h2>
      <CustomButton
        type="button"
        name={BUTTON_TYPE_CLASSES.base}
        onClick={() => alert("clicaron")}
        children="Me Clica"
      />
      <br/>
      <ExtensibleStyleButton />
    </div>
  );
};

export default ExtensibleStyle;