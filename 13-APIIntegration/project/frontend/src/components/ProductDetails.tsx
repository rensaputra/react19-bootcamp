import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "..";
const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  //   const productObj: Product[] = useOutletContext();
  //   const selectedProduct = productObj.find((product) => product.id === id);
  const products = useSelector((state: RootState) => state.products.products);
  const selectedProduct = products.find((product) => product.id === Number(id));
  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="border border-neutral-50 rounded-md shadow-md w-fit mt-2 bg-gray-200 grid grid-cols-3">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="h-[260px] w-[260px] object-cover col-span-1 rounded-l-md"
        />
        <div className="flex flex-col gap-2 col-span-2 px-5">
          <span className="text-3xl font-semibold">{selectedProduct.name}</span>
          <span className="text-2xl font-medium">
            Price: ${selectedProduct.price}
          </span>
          <span className="text-md leading-5 text-neutral-500">
            {selectedProduct.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
