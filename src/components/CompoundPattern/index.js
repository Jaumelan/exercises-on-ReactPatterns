import { TodoProvider } from "../../context/todoContext";
import Todos from "../Todos";

const CompoundPattern = () => {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
};

export default CompoundPattern;
