import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { useEffect } from "react";
import { setProducts } from "../store/productSlice";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products`)
      .then((res) => {
        const data = res.json();
        if (res.ok) {
          return data;
        } else {
          throw new Error("Failed to fetch products");
        }
      })
      .then((data) => {
        dispatch(setProducts(data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-between m-6">
        <h1 className="text-3xl font-semibold">Products</h1>
        <Link
          to="/products/add"
          className="bg-blue-500 text-white px-3 py-1 rounded-md m-6 inline-block"
        >
          Add product
        </Link>
      </div>
      <div className="m-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Link to={`/product-details/${product.id}`} key={product.id}>
              <div
                key={product.id}
                className="border border-gray-50 rounded-md shadow-md w-fit"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[240px] w-[240px] object-cover rounded-t-md"
                />
                <div className="border-t border-gray-200 bg-gray-300 text-xl text-center font-semibold p-2 rounded-b-md">
                  <span>{product.name}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-2xl font-semibold mx-auto">
            No Products Available
          </h1>
        )}
      </div>
    </>
  );
};

export default Products;
