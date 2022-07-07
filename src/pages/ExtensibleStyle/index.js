import CustomButton, { BUTTON_TYPE_CLASSES } from "../../components/CustomButton";
import ExtensibleStyleButton from "../../components/extensibleStyleButton";

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