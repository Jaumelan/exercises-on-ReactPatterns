
import FinalFormWithRenderProps from "../FinalWithRenderProps";

const PropsGettersWithRenderPropsPage = () => {
  const onSubmit = (values) => alert(JSON.stringify(values));

  const logChange = () => {
    console.log("logChange");
  }

  return (
    <div>
      <h2>Form with Props Getters and Render Props</h2>
      <FinalFormWithRenderProps initialState={{ name: "", jobTitle: "" }}>
        {({ formValues, handleSubmit, getInputProps }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                {...getInputProps()}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                {...getInputProps({onChange: logChange})} 
              />
            </div>
            <button style={{ margin: "8px 0" }} type="submit">
              Submit
            </button>
          </form>
        )}
      </FinalFormWithRenderProps>
    </div>
  );
};

export default PropsGettersWithRenderPropsPage;
