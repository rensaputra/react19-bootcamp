import { useLocation, useOutletContext, useParams } from "react-router";
import { Product } from "../types";
const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  //   const productObj: Product[] = useOutletContext();
  //   const selectedProduct = productObj.find((product) => product.id === id);
  const { state }: { state: Product } = useLocation();
  return (
    <div className="mx-auto max-w-[800px]">
      <h1 className="text-3xl font-semibold">Selected Product</h1>
      <div className="border border-gray-50 rounded-md shadow-md w-fit p-4 mt-2 bg-gray-200 grid grid-cols-4">
        <img
          src={state.image}
          alt={state.name}
          className="h-[160px] w-[160px] object-contain col-span-1 p-3"
        />
        <div className="flex flex-col gap-2 text-xl font-semibold col-span-3">
          <span>{state.name}</span>
          <span>{state.description}</span>
          <span>Price: ${state.price}</span>
        </div>
      </div>
    </div>
  );
};;

export default ProductDetails;
