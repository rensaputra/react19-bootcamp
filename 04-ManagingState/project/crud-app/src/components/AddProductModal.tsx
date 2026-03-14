const AddProductModal = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="relative w-full max-w-xl bg-white rounded-lg p-10 shadow-lg text-xl">
        <button
          type="button"
          className="absolute top-2 right-5 text-3xl p-0 text-gray-400"
          onClick={handleCloseModal}
        >
          &times;
        </button>
        Add Product Modal
      </div>
    </div>
  );
};

export default AddProductModal;
