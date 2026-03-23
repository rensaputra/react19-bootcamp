import { useNavigate, useParams } from "react-router";
import useFetchProductDetails from "./hooks/useFetchProductDetails";
import { useState } from "react";
import { Product } from "../types";

const AddEditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    price: 0,
    image: "",
    description: "",
  } as Product);
  const { loading, error } = useFetchProductDetails(id, setData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (id) {
      handleEditProduct();
    } else {
      handleAddProduct();
    }
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

  const handleEditProduct = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Product updated successfully!");
          navigate(`/product-details/${id}`);
        } else {
          throw new Error("Failed to update product");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while updating the product.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="border border-gray-50 shadow-lg rounded-md p-10 max-w-[1024px] m-6 mx-auto">
      <h1 className="text-3xl font-semibold">
        {id ? "Edit Product" : "Add Product"}
      </h1>
      <div>
        <form className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Product Name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              className="border border-gray-200 rounded-md p-2"
              onChange={handleChange}
              required
            />
            <label className="font-semibold">Price:</label>
            <input
              type="number"
              name="price"
              value={data.price}
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
              value={data.image}
              className="border border-gray-200 rounded-md p-2"
              onChange={handleChange}
              required
            />
            <label className="font-semibold">Description:</label>
            <textarea
              name="description"
              value={data.description}
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

export default AddEditProducts;
