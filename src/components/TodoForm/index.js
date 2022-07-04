import { useState, useContext } from "react";
import { TodoContext } from "../../context/todoContext";

const TodoForm = () => {
    const [value, setValue] = useState("");
    const { handleSubmit } = useContext(TodoContext);

    const handleInputChange = ({ target: {value} }) => {
        setValue(value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(value);
        setValue("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>Enter new To-Do</label>
            <input type="text" value={value} onChange={handleInputChange} />
            <button type="submit">Add TO-DO</button>
        </form>
    )
}

export default TodoForm;