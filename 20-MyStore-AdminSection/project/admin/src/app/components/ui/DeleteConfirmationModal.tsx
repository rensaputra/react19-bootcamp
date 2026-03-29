import { CloseIcon } from "../icons";
import { Button } from "./Button";
const DeleteConfirmationModal = ({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black/50 fixed inset-0" />
      <div className="relative p-6 w-full max-w-lg h-full md:h-auto">
        <div className="relative text-center bg-white rounded-lg shadow-lg p-6">
          <p className="my-3 font-semibold text-md text-gray-700">
            Are you sure you want to delete this user?
          </p>
          <button onClick={onCancel} className="close-icon-btn">
            <CloseIcon />
          </button>
          <div className="flex items-center justify-center gap-x-4 mt-3">
            <Button
              className="bg-transparent text-black border border-gray-600"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button className="custom-secondary-btn" onClick={onConfirm}>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
