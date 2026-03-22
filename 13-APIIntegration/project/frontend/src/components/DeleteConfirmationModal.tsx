const DeleteConfirmationModal = ({
  handleModalClose,
  handleDeleteProduct,
}: {
  handleModalClose: () => void;
  handleDeleteProduct: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative w-full max-w-[450px] bg-white rounded-lg p-5 shadow-lg">
        <button
          type="button"
          className="absolute top-0 right-2 text-2xl text-gray-500 hover:text-gray-700"
          onClick={handleModalClose}
        >
          &times;
        </button>
        <h1 className="text-black font-semibold text-center">
          Are you sure you want to delete this product?
        </h1>
        <div className="flex gap-2 mt-2 items-center justify-center">
          <button
            type="button"
            className="border border-black bg-neutral-200 text-black p-2 rounded-md w-fit text-center"
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="border border-red-500 bg-red-500 text-white p-2 rounded-md w-fit text-center"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
