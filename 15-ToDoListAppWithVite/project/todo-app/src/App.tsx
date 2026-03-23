import "./App.css";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import { useState } from "react";
import type { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos((prev: Todo[]) => [...prev, todo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev: Todo[]) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      {todos.length > 0 ? (
        <ToDoList todos={todos} toggleTodo={toggleTodo} />
      ) : (
        <p className="text-center text-gray-500">No task yet</p>
      )}
    </div>
  );
}

export default App;
