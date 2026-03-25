"use client";

import { useActionState } from "react";
import { submitForm } from "../actions";

export default function Home() {
  const [formState, setFormState, isPending] = useActionState(submitForm, {
    name: "",
    email: "",
  });
  console.log(formState, isPending);

  return (
    <div className="p-5">
      <div className="flex flex-col mt-5">
        <form action={setFormState} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-gray-300 rounded px-2 py-1 max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-2 py-1 max-w-xs"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded max-w-fit disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="mt-5">
        {(formState.name || formState.email) && !isPending && (
          <>
            <p>Name: {formState.name}</p>
            <p>Email: {formState.email}</p>
          </>
        )}
        {isPending && <p>Submitting...</p>}
      </div>
    </div>
  );
}
