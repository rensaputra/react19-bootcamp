"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
}
