import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos((prev: string[]) => [...prev, todo]);
  };

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      ) : (
        <p>No task yet</p>
      )}
    </div>
  );
}

export default App;
