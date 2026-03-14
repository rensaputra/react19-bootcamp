import React from "react";

interface ProductCardProps {
  productCode: string;
  productName: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productCode,
  productName,
  price,
}) => {
  return (
    <div className="border rounded-lg p-5 flex flex-col gap-2 font-semibold shadow-lg w-[240px] text-2xl">
      <span>{productCode}</span>
      <span>{productName}</span>
      <span>${price}</span>
      <div className="flex gap-1 mt-6 text-xl">
        <button
          type="button"
          className="border rounded-md px-2 py-1 font-semibold w-full"
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-500 text-white rounded-md px-2 py-1 font-semibold w-full"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
