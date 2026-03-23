import type { Todo } from "../types";
import TodoItem from "./TodoItem";

const ToDoList = ({
  todos,
  toggleTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}) => {
  return (
    <ul className="max-h-96 overflow-y-auto divide-y">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
