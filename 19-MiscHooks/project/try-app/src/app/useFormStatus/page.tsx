"use client";

import { useActionState } from "react";
import { addTodo } from "../actions";
import SubmitButton from "./SubmitButton";

export default function TodoPage() {
  const [todos, addTodoAction] = useActionState(addTodo, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-6">To-Do List with useFormStatus</h1>

      <form action={addTodoAction} className="flex flex-col gap-3 mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            name="todo"
            placeholder="Add a new to-do..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <SubmitButton />
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">
          Your To-Dos {todos.length > 0 && `(${todos.length})`}
        </h2>
        {todos.length === 0 ? (
          <p className="text-gray-500 italic">
            No to-dos yet. Add one above to get started!
          </p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 border-l-4 border-blue-500 rounded"
              >
                <span className="text-blue-500 font-semibold text-lg">
                  {index + 1}.
                </span>
                <span className="text-gray-800">{todo}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
