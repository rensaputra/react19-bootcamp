import { useState } from "react";
import type { Todo } from "../types";

const TodoForm = ({ onAdd }: { onAdd: (todo: Todo) => void }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    console.log("New Todo:", newTodo);
    onAdd({ id: Date.now(), text: newTodo, completed: false });
    setNewTodo("");
  };

  return (
    <form className="p-4 border-b" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          className="grow p-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-400 border border-gray-200"
          placeholder="Enter a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center bg-indigo-600 text-white p-2 rounded-r-lg"
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
