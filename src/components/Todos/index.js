import TodoForm from "../TodoForm";
import TodoHeader from "../TodoHeader";
import TodoTitle from "../TodoTitle";
import TodoList from "../TodoList";



const Todos = () => {
  return (
    <div>
      <h2>Example of Compound Pattern</h2>
      <TodoHeader>
        <Todos.Title title="TO-DO" />
      </TodoHeader>
      <Todos.Form />
      <Todos.List />
    </div>
  );
};

Todos.Title = TodoTitle;
Todos.Form = TodoForm;
Todos.List = TodoList;

export default Todos;
