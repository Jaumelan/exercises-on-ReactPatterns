import propTypes from "prop-types";
import { useState } from "react";

function callAll(...fns) {
  return (...args) => fns.forEach((fn) => fn && fn(...args));
}

const FinalFormWithRenderProps = ({ initialState, children }) => {
  const [formValues, setFormValues] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (_handleSubmit) => (event) => {
    event.preventDefault();

    _handleSubmit(formValues);
  };

  const getInputProps = (props = {}) => ({
    onChange: callAll(props.onChange, handleChange),
  });

  const getStateAndHelpers = () => ({
    formValues,
    getInputProps,
    handleSubmit,
  });

  return children(getStateAndHelpers());
};

FinalFormWithRenderProps.PropTypes = {
  children: propTypes.func.isRequired,
  initialState: propTypes.object.isRequired,
};

export default FinalFormWithRenderProps;