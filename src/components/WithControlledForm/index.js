import { useState } from "react";
import MyForm from "../MyForm";

const withControlledForm = ( Form, initialState = {}, onSubmit ) => {
  const ControlledForm = () => {
    const [formValues, setFormValues] = useState(initialState );
    
    const handleChange = ( e ) => {
      const { name, value } = e.target;

      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      onSubmit(formValues);
    };

    return (
      <Form
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };

  return ControlledForm;
};

const initialState = {
  name: "",
  address: "",
  age: "",
  phone: "",
};

const onSubmit = (formValues) => alert(JSON.stringify(formValues));

const MyFormControlled = withControlledForm(MyForm, initialState, onSubmit);

export default MyFormControlled;
