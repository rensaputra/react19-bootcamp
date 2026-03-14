import React from "react";
import ProductCard from "./components/ProductCard";
import AddEditProductModal from "./components/AddEditProductModal";
import { Product } from "./types";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [productList, setProductList] = React.useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null,
  );

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = (product: Product) => {
    setProductList((prev) => [...prev, product]);
  };

  const handleDeleteProduct = (productCode: string) => {
    setProductList((prev) =>
      prev.filter((product) => product.productCode !== productCode),
    );
  };

  const handleEditProduct = (product: Product) => {
    console.log(product);
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProductList((prev) =>
      prev.map((product) =>
        product.productCode === updatedProduct.productCode
          ? updatedProduct
          : product,
      ),
    );
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
            {productList
              .filter((product) => product.isActive)
              .map((product) => (
                <ProductCard
                  key={product.productCode}
                  product={product}
                  handleDeleteProduct={handleDeleteProduct}
                  handleEditProduct={handleEditProduct}
                />
              ))}
            {productList
              .filter((product) => !product.isActive)
              .map((product) => (
                <ProductCard
                  key={product.productCode}
                  product={product}
                  handleDeleteProduct={handleDeleteProduct}
                  handleEditProduct={handleEditProduct}
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
        <AddEditProductModal
          handleCloseModal={handleCloseModal}
          handleAddProduct={handleAddProduct}
          selectedProduct={selectedProduct}
          handleUpdateProduct={handleUpdateProduct}
        />
      )}
    </>
  );
}

export default App;
