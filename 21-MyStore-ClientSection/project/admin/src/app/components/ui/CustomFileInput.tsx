"use client";

import { Input } from "./Input";
import { ArrowUpIcon } from "../icons";
import { useState } from "react";

const CustomFileInput = ({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: string;
}) => {
  const [fileName, setFileName] = useState(
    defaultValue ? defaultValue.split("/").pop() : "No file chosen.",
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file?.name || "No file chosen.");
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
      <Input
        type="file"
        name={name}
        id="fileInput"
        className="sr-only"
        onChange={handleFileChange}
      />
      <label
        htmlFor="fileInput"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 w-fit flex items-center gap-x-2 border border-neutral-300
         disabled:cursor-not-allowed disabled:opacity-50 hover:border-gray-400"
      >
        <ArrowUpIcon />
        Choose file
      </label>
      <span className="ml-2 text-gray-600 truncate">{fileName}</span>
    </div>
  );
};

export default CustomFileInput;
