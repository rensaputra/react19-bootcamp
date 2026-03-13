import { useState } from "react";

function createInitialValue() {
  let items = [];

  for (let i = 0; i < 100; i++) {
    items.push(i);
  }
  return items;
}
const Product = () => {
  let [numArray, setNumArray] = useState(createInitialValue);

  const incrementArray = () => {
    setNumArray((prevArray) => [...prevArray, prevArray.length]);
  };

  const decrementArray = () => {
    setNumArray((prevArray) => prevArray.slice(0, -1));
  }
  return (
    <>
      <button onClick={incrementArray}>Add Item</button>
      <button onClick={decrementArray}>Remove Item</button>
      <ul>
        {numArray.map((num, index) => (
          <li key={index}>Item {num}</li>
        ))}
      </ul>
    </>
  );
};

export default Product;
