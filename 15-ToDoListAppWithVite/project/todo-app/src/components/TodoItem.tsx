import type { Todo } from "../types";
import { Circle, CircleCheck, Trash2 } from "lucide-react";

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
    <li className={`p-2 ${todo.completed ? "bg-neutral-200" : "bg-white"}`}>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? (
            <CircleCheck className="text-indigo-600" />
          ) : (
            <Circle className="text-gray-400" />
          )}
        </button>
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
        <div className="ml-auto flex ">
          <button
            type="button"
            className="cursor-pointer flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1 text-white bg-red-500 hover:bg-red-600 transition-colors duration-200"
            onClick={() => removeTodo(todo.id)}
          >
            <Trash2 className="text-white" />
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
