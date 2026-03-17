import { Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../index";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <>
      <div className="m-6 flex gap-4">
        {products.map((product) => (
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
        ))}
      </div>
    </>
  );
};

export default Products;
