import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState({});

  const handleSubmit = (todo) => {
    console.log(todos)
    console.log('todo ', todo)
    setTodos({ ...todos, [todo]: { name: todo, isDone: false } });
  };

  const toggleTodo = ({ target: { name } }) => {
    console.log("name", name);
    setTodos({
      ...todos,
      [name]: { ...todos[name], isDone: !todos[name].isDone },
    });
  };

  const getTodosValues = () => Object.values(todos);

  const valuesProvider = {
    handleSubmit,
    toggleTodo,
    getTodosValues,
  };

  return (
    <TodoContext.Provider value={valuesProvider}>
      {children}
    </TodoContext.Provider>
  );
};
