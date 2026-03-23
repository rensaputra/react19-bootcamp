import type { Todo } from "../types";

const TodoItem = ({
  todo,
  toggleTodo,
  removeTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}) => {
  return (
    <li className="p-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onClick={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
        <div className="absolute right-2">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => removeTodo(todo.id)}
          >
            🗑️
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
