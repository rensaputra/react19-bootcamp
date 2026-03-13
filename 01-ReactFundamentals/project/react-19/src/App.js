import React from "react";
import "./App.css";
import Product from "./components/Product";
import Employee from "./components/Employee";

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

  const employees = [
    { id: "0001", name: "John Doe", salary: 50000, isActive: true },
    { id: "0002", name: "Jane Smith", salary: 60000, isActive: false },
    { id: "0003", name: "Bob Johnson", salary: 55000, isActive: true },
    { id: "0004", name: "Alice Brown", salary: 70000, isActive: false },
  ];

  const factorialValue = (n) => {
    let result = 1;

    for (let i = n; i > 0; i--) {
      result *= i;
    }
    console.log(result);
  };

  return (
    <>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <button onClick={() => factorialValue(5)}>Click Me</button>
      <div className="employee-list">
        {employees.map((emp) => (
          <Employee key={emp.id} employee={emp} />
        ))}
      </div>
    </>
  );
}

export default App;
