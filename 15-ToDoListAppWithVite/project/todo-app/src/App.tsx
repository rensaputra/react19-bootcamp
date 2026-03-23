import "./App.css";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import { useState, useEffect } from "react";
import type { Todo } from "./types";
import TodoHeader from "./components/TodoHeader";
function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos((prev: Todo[]) => [...prev, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos((prev: Todo[]) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prev: Todo[]) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="flex items-center justify-center p-4 bg-linear-to-br from-indigo-500 to-purple-600 min-h-screen">
      <div className="bg-white w-full max-w-xl overflow-hidden rounded-sm shadow-xl">
        <TodoHeader todos={todos} />
        <TodoForm onAdd={addTodo} />
        {todos.length > 0 ? (
          <ToDoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ) : (
          <p className="text-center text-gray-500">No task yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
