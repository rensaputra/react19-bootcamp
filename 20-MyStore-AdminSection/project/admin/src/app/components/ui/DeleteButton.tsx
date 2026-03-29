"use client";

import { Button } from "@/app/components/ui/Button";
import { TrashIcon } from "@/app/components/icons";
import DeleteConfirmationModal from "@/app/components/ui/DeleteConfirmationModal";
import { useState } from "react";

export function DeleteButton({
  userId,
  onDelete,
}: {
  userId: number;
  onDelete: (userId: number) => Promise<void>;
}) {
  const handleDelete = async () => {
    await onDelete(userId);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="bg-transparent p-0 px-2 border-none text-red-500 hover:shadow-none hover:cursor-pointer"
      >
        <TrashIcon />
      </Button>
      {showModal && (
        <DeleteConfirmationModal
          onConfirm={handleDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
}
