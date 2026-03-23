import type { Todo } from "../types";
import TodoItem from "./TodoItem";

const ToDoList = ({
  todos,
  toggleTodo,
  removeTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}) => {
  return (
    <ul className="max-h-96 overflow-y-auto divide-y">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
