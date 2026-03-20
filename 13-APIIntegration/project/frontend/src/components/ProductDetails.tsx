import { data, useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { useEffect, useState } from "react";
import { Product } from "../types";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch product details");
        }
      })
      .then((data) => {
        data.length > 0 && setSelectedProduct(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="border border-neutral-50 rounded-md shadow-md w-fit mt-2 bg-neutral-50 grid grid-cols-3">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="h-[260px] w-[260px] object-cover col-span-1 rounded-l-md"
        />
        <div className="flex flex-col gap-2 col-span-2 px-5">
          <span className="text-3xl font-semibold">{selectedProduct.name}</span>
          <span className="text-2xl font-medium">
            Price: ${selectedProduct.price}
          </span>
          <span className="text-md leading-5 text-neutral-500">
            {selectedProduct.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
