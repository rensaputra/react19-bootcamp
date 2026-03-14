import React from "react";
import ProductCard from "./components/ProductCard";
import AddProductModal from "./components/AddProductModal";

const productList = [
  {
    productCode: "001",
    productName: "Apple",
    price: 20,
  },
  {
    productCode: "002",
    productName: "Banana",
    price: 10,
  },
  {
    productCode: "003",
    productName: "Cucumber",
    price: 5,
  },
  {
    productCode: "004",
    productName: "Pineapple",
    price: 12,
  },
  {
    productCode: "005",
    productName: "Watermelon",
    price: 15,
  },
  {
    productCode: "006",
    productName: "Grapes",
    price: 8,
  },
  {
    productCode: "007",
    productName: "Mango",
    price: 18,
  },
  {
    productCode: "008",
    productName: "Strawberry",
    price: 25,
  },
  {
    productCode: "009",
    productName: "Blueberry",
    price: 30,
  },
  {
    productCode: "010",
    productName: "Orange",
    price: 12,
  },
  {
    productCode: "011",
    productName: "Pear",
    price: 10,
  },
];

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
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
      </div>
      {isOpen && <AddProductModal handleCloseModal={handleCloseModal} />}
    </>
  );
}

export default App;
