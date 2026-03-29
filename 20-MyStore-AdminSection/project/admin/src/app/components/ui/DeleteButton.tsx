"use client";

import { Button } from "@/app/components/ui/Button";
import { TrashIcon } from "@/app/components/icons";
import DeleteConfirmationModal from "@/app/components/ui/DeleteConfirmationModal";
import { useState } from "react";

export function DeleteButton({
  id,
  onDelete,
  deleteType,
}: {
  id: number;
  onDelete: (id: number) => Promise<void>;
  deleteType?: string;
}) {
  const handleDelete = async () => {
    await onDelete(id);
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
          message={`Are you sure you want to delete this ${deleteType || "item"}?`}
        />
      )}
    </>
  );
}
