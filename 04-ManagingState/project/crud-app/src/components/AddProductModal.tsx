import React from "react";
import { Product } from "../types";

const AddProductModal = ({
  handleCloseModal,
  handleAddProduct,
}: {
  handleCloseModal: () => void;
  handleAddProduct: (product: Product) => void;
}) => {
  const [data, setData] = React.useState<Product>({
    productCode: "",
    productName: "",
    price: 0,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleAddProduct(data);
    handleCloseModal();
  };

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
        <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
        <form className="gap-2 flex flex-col">
          <div>
            <label className="font-medium">Product Code: </label>
            <input
              className="w-full border rounded px-2 py-1"
              type="text"
              placeholder="Product Code"
              name="productCode"
              value={data.productCode}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label className="font-medium">Product Name: </label>
            <input
              className="w-full border rounded px-2 py-1"
              type="text"
              placeholder="Product Name"
              name="productName"
              value={data.productName}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label className="font-medium">Price: </label>
            <input
              className="w-full border rounded px-2 py-1"
              type="number"
              placeholder="Price"
              name="price"
              value={data.price}
              onChange={handleInputChange}
            ></input>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
