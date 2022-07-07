import FormWithRenderProps from "../FormWithRenderProps";

const PropsGettersPage = () => {
  const onSubmit = (values) => alert(JSON.stringify(values));

  return (
    <div>
      <h2>Form with Props Getters</h2>
      <FormWithRenderProps initialState={{ name: "", jobTitle: "" }}>
        {({ formValues, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={handleChange}
              />
            </div>
            <button style={{ margin: "8px 0" }} type="submit">
              Submit
            </button>
          </form>
        )}
      </FormWithRenderProps>
    </div>
  );
};

export default PropsGettersPage;
