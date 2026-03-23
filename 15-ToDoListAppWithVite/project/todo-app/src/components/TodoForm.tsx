import { useState } from "react";

const TodoForm = ({ onAdd }: { onAdd: (todo: string) => void }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    console.log("New Todo:", newTodo);
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form className="p-4 border-b" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="grow p-2 rounded-l-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          placeholder="Enter a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center bg-indigo-600 text-white p-2 rounded-r-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
