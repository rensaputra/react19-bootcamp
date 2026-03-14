import React from "react";
import ProductCard from "./components/ProductCard";
import AddProductModal from "./components/AddProductModal";
import { Product } from "./types";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [productList, setProductList] = React.useState<Product[]>([]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddProduct = (product: Product) => {
    setProductList((prev) => [...prev, product]);
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center my-10">
          <h1 className="text-5xl font-bold">Products</h1>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md text-xl font-semibold"
            onClick={handleOpenModal}
          >
            Add Product
          </button>
        </div>
        {productList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {productList.map((product) => (
              <ProductCard
                key={product.productCode}
                productCode={product.productCode}
                productName={product.productName}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <h1 className="text-xl font-medium text-center col-span-6">
            No products available
          </h1>
        )}
      </div>
      {isOpen && (
        <AddProductModal
          handleCloseModal={handleCloseModal}
          handleAddProduct={handleAddProduct}
        />
      )}
    </>
  );
}

export default App;
