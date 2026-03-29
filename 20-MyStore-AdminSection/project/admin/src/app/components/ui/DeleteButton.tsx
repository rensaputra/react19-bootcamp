"use client";

import { Button } from "@/app/components/ui/Button";
import { TrashIcon } from "@/app/components/icons";
import { deleteUser } from "@/actions/userActions";

export function DeleteButton({ userId }: { userId: number }) {
  const handleDelete = async () => {
    await deleteUser(userId);
  };

  return (
    <Button
      onClick={handleDelete}
      className="bg-transparent p-0 px-2 border-none text-red-500 hover:shadow-none hover:cursor-pointer"
    >
      <TrashIcon />
    </Button>
  );
}
