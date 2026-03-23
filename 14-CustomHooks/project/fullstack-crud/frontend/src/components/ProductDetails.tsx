import { Link, useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Product } from "../types";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import useFetchProductData from "./hooks/useFetchProductData";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteProduct = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Product deleted successfully!");
          navigate("/");
        } else {
          throw new Error("Failed to delete product");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while deleting the product.");
      });
  };

  const handleModalOpen = () => {
    setShowDeleteModal(true);
  };

  const handleModalClose = () => {
    setShowDeleteModal(false);
  };

  const { data: selectedProduct, loading, error } = useFetchProductData(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="mx-auto max-w-[800px]">
        <div className="border border-neutral-50 rounded-md shadow-md w-fit mt-2 bg-neutral-50 grid grid-cols-3">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="h-[260px] w-[260px] object-cover col-span-1 rounded-l-md"
          />
          <div className="flex flex-col gap-2 col-span-2 px-5">
            <span className="text-3xl font-semibold">
              {selectedProduct.name}
            </span>
            <span className="text-2xl font-medium">
              Price: ${selectedProduct.price}
            </span>
            <span className="text-md leading-5 text-neutral-500">
              {selectedProduct.description}
            </span>
            <div className="flex gap-2 mt-2">
              <Link
                to={`/product/edit/${selectedProduct.id}`}
                className="border border-black bg-neutral-200 text-black p-2 rounded-md w-fit text-center"
              >
                Edit product
              </Link>
              <button
                type="button"
                className="border border-red-500 bg-red-500 text-white p-2 rounded-md w-fit text-center"
                onClick={handleModalOpen}
              >
                Delete product
              </button>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteConfirmationModal
          handleModalClose={handleModalClose}
          handleDeleteProduct={handleDeleteProduct}
        />
      )}
    </>
  );
};

export default ProductDetails;
