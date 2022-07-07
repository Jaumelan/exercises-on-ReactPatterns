import { useState } from "react";
import PropTypes from 'prop-types';

const NormalForm = ({ onSubmit }) => {
    const [ formValues, setFormValues ] = useState({
        name: '',
        address: '',
        age: '',
        phone: '',
    });

    const handleChange = ({ e }) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(JSON.stringify(formValues));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Name</p>
                <input type="text" name="name" value={formValues.name} onChange={handleChange} />
            </div>
            <div>
                <p>Address</p>
                <input type="text" name="address" value={formValues.address} onChange={handleChange} />
            </div>
            <div>
                <p>Age</p>
                <input type="number" name="age" value={formValues.age} onChange={handleChange} />
            </div>
            <div>
                <p>Phone</p>
                <input type="tel" name="phone" value={formValues.phone} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default NormalForm;

NormalForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}