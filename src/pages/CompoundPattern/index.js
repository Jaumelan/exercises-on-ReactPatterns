import { TodoProvider } from "../../context/todoContext";
import Todos from "../../components/Todos";

const CompoundPattern = () => {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
};

export default CompoundPattern;
