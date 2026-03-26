"use client";

import { useOptimistic, useTransition, useState } from "react";
import { addTodoAction, deleteTodoAction, toggleTodoAction } from "./actions";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function UseOptimisticPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn useOptimistic hook", completed: false },
    { id: "2", text: "Build a todo app", completed: false },
    { id: "3", text: "Master React 19", completed: true },
  ]);

  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");

  // Optimistic todos - shows the UI updates immediately
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => [...state, newTodo],
  );

  const [optimisticDeleteTodos, addOptimisticDelete] = useOptimistic(
    todos,
    (state, id: string) => state.filter((t) => t.id !== id),
  );

  const [optimisticToggleTodos, addOptimisticToggle] = useOptimistic(
    todos,
    (state, { id, completed }: { id: string; completed: boolean }) =>
      state.map((t) => (t.id === id ? { ...t, completed } : t)),
  );

  // Use the latest optimistic state
  const displayedTodos =
    optimisticTodos.length > todos.length
      ? optimisticTodos
      : optimisticDeleteTodos.length < todos.length
        ? optimisticDeleteTodos
        : optimisticToggleTodos;

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setError("");
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: input,
      completed: false,
    };

    startTransition(async () => {
      // Optimistically add the todo
      addOptimisticTodo(newTodo);
      setInput("");

      try {
        await addTodoAction(newTodo); //Simulated server call
        // On success, update actual state
        setTodos((prev) => [...prev, newTodo]);
      } catch (err) {
        setError("Failed to add todo. Please try again.");
        // Revert on error - the optimistic update will be rolled back
      }
    });
  };

  const handleDeleteTodo = async (id: string) => {
    setError("");
    startTransition(async () => {
      // Optimistically delete the todo
      addOptimisticDelete(id);

      try {
        await deleteTodoAction(id);
        // On success, update actual state
        setTodos((prev) => prev.filter((t) => t.id !== id));
      } catch (err) {
        setError("Failed to delete todo. Please try again.");
      }
    });
  };

  const handleToggleTodo = async (id: string) => {
    setError("");
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const newCompleted = !todo.completed;

    startTransition(async () => {
      // Optimistically toggle the todo
      addOptimisticToggle({ id, completed: newCompleted });

      try {
        await toggleTodoAction(id, newCompleted);
        // On success, update actual state
        setTodos((prev) =>
          prev.map((t) =>
            t.id === id ? { ...t, completed: newCompleted } : t,
          ),
        );
      } catch (err) {
        setError("Failed to update todo. Please try again.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            My Todo List
          </h1>
          <p className="text-gray-600 mb-6">
            Using{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
              useOptimistic
            </code>{" "}
            for instant UI updates
          </p>

          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Add Todo Form */}
          <form onSubmit={handleAddTodo} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo..."
                disabled={isPending}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isPending || !input.trim()}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isPending ? "Adding..." : "Add"}
              </button>
            </div>
          </form>

          {/* Todo List */}
          <div className="space-y-2">
            {displayedTodos.length === 0 ? (
              <p className="text-center text-gray-400 py-8">
                No todos yet. Add one to get started!
              </p>
            ) : (
              displayedTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all ${
                    todo.completed
                      ? "bg-gray-50 border-gray-200"
                      : "bg-white border-gray-300 hover:border-blue-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                    disabled={isPending}
                    className="w-5 h-5 text-blue-500 rounded cursor-pointer disabled:opacity-50"
                  />
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    disabled={isPending}
                    className="px-3 py-1 text-red-500 hover:bg-red-50 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Stats */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Total</p>
                <p className="text-2xl font-bold text-blue-600">
                  {displayedTodos.length}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {displayedTodos.filter((t) => t.completed).length}
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-gray-700">
            <p className="font-semibold mb-2">How useOptimistic works:</p>
            <ul className="space-y-1 text-xs">
              <li>
                ✓ The UI updates immediately when you add/delete/toggle todos
              </li>
              <li>
                ✓ The optimistic state is shown while the server processes the
                request
              </li>
              <li>
                ✓ If the server request fails, the UI automatically reverts
              </li>
              <li>
                ✓ This creates a snappier, more responsive user experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
