"use server";

// Simulated server actions
export async function addTodoAction(todo: Todo) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  // Simulate occasional error (10% chance)
  if (Math.random() < 0.1) {
    throw new Error("Failed to add todo");
  }
  return todo;
}

export async function deleteTodoAction(id: string) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600));
  // Simulate occasional error (10% chance)
  if (Math.random() < 0.1) {
    throw new Error("Failed to delete todo");
  }
  return id;
}

export async function toggleTodoAction(id: string, completed: boolean) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { id, completed };
}
