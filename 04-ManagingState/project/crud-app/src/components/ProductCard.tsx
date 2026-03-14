import React from "react";
import { Product } from "../types";

const ProductCard = ({
  product,
  handleDeleteProduct,
  handleEditProduct,
}: {
  product: Product;
  handleDeleteProduct: (productCode: string) => void;
  handleEditProduct: (product: Product) => void;
}) => {
  return (
    <div
      className={`border rounded-lg p-5 flex flex-col gap-2 font-semibold shadow-lg w-[240px] text-2xl ${product.isActive ? "bg-white" : "bg-gray-300"}`}
    >
      <span>{product.productCode}</span>
      <span>{product.productName}</span>
      <span>${product.price}</span>
      <div className="flex gap-1 mt-6 text-xl">
        <button
          type="button"
          className="border rounded-md px-2 py-1 font-semibold w-full"
          onClick={() => handleEditProduct(product)}
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-500 text-white rounded-md px-2 py-1 font-semibold w-full"
          onClick={() => handleDeleteProduct(product.productCode)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
