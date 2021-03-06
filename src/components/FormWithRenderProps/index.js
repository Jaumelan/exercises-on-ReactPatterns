import propTypes from "prop-types";
import { useState } from "react";

const FormWithRenderProps = ({ initialState, children }) => {
  const [formValues, setFormValues] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (_handleSubmit) => (event) => {
    event.preventDefault();

    _handleSubmit(formValues);
  };

  const getStateAndHelpers = () => ({
    formValues,
    handleChange,
    handleSubmit,
  });

  return children(getStateAndHelpers());
};

FormWithRenderProps.PropTypes = {
  children: propTypes.func.isRequired,
  initialState: propTypes.object.isRequired,
};

export default FormWithRenderProps;