import React from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
  const products = [
    {
      id: "0001",
      name: "Apple",
      price: 12,
      image: "/apple.png",
      isActive: true,
    },
    {
      id: "0002",
      name: "Banana",
      price: 10,
      image: "/banana.png",
      isActive: false,
    },
    {
      id: "0003",
      name: "Orange",
      price: 15,
      image: "/orange.png",
      isActive: true,
    },
  ];

  return (
    <>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
