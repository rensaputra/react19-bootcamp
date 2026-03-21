import { useNavigate } from "react-router";
import { Product } from "../types";
import { useState } from "react";

const AddProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Product>({
    name: "",
    price: 0,
    image: "",
    description: "",
  } as Product);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitting product data:", data);
    handleAddProduct();
  };

  const handleAddProduct = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Product added successfully!");
          navigate("/");
        } else {
          throw new Error("Failed to add product");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while adding the product.");
      });
  };

  return (
    <div className="border border-gray-50 shadow-lg rounded-md p-10 max-w-[1024px] m-6 mx-auto">
      <h1 className="text-3xl font-semibold">Add Product</h1>
      <div>
        <form className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Product Name:</label>
            <input
              type="text"
              name="name"
              className="border border-gray-200 rounded-md p-2"
              onChange={handleChange}
              required
            />
            <label className="font-semibold">Price:</label>
            <input
              type="number"
              name="price"
              className="border border-gray-200 rounded-md p-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Image URL:</label>
            <input
              type="text"
              name="image"
              className="border border-gray-200 rounded-md p-2"
              onChange={handleChange}
              required
            />
            <label className="font-semibold">Description:</label>
            <textarea
              name="description"
              className="border border-gray-200 rounded-md p-2"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md col-span-2 w-[400px] mx-auto mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
