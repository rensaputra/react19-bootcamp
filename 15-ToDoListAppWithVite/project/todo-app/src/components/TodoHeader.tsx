const TodoHeader = ({ todos }: { todos: Todo[] }) => {
  return (
    <div className="bg-indigo-700 p-5">
      <h1 className="text-2xl font-bold text-white text-center">
        My Todo List
      </h1>
      <div className="flex justify-between mt-2">
        <div className="text-white border p-1 rounded-md">
          Total: {todos.length}
        </div>
        <div className="text-white border p-1 rounded-md">
          Completed: {todos.filter((todo) => todo.completed).length}
        </div>
        <div className="text-white border p-1 rounded-md">
          Pending: {todos.filter((todo) => !todo.completed).length}
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;
