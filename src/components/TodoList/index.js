import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";

const TodoList = () => {
  const { toggleTodo, getTodosValues } = useContext(TodoContext);

  const todosList = getTodosValues();
  console.log(todosList);

  return (
    <ul>
      {todosList.map(({ name, isDone }) => (
        <li key={name}>
          <label>{name}</label>
          <input
            type="checkbox"
            checked={isDone}
            onChange={toggleTodo}
            name={name}
          />
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
