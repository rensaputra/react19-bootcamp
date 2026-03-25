"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex flex-col mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-300 rounded px-2 py-1 max-w-xs"
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 rounded px-2 py-1 max-w-xs"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded max-w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
