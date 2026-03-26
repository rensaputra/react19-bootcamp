"use server";

export async function submitForm(
  prevState: { name: string; email: string } | null,
  formData: FormData,
): Promise<{ name: string; email: string }> {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { name, email };
}

export async function addTodo(
  prevState: string[],
  formData: FormData,
): Promise<string[]> {
  const todo = String(formData.get("todo") || "").trim();
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (todo) {
    return [todo, ...prevState];
  }
  return prevState;
}
