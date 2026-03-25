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
