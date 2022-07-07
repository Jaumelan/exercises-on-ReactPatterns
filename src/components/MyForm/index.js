const MyForm = ({ formValues, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
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
        <p>Address</p>
        <input
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Age</p>
        <input
          type="number"
          name="age"
          value={formValues.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Phone</p>
        <input
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MyForm;