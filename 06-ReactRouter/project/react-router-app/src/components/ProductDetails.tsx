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
      <div className="border border-neutral-50 rounded-md shadow-md w-fit mt-2 bg-gray-200 grid grid-cols-3">
        <img
          src={state.image}
          alt={state.name}
          className="h-[260px] w-[260px] object-cover col-span-1 rounded-l-md"
        />
        <div className="flex flex-col gap-2 col-span-2 px-5">
          <span className="text-3xl font-semibold">{state.name}</span>
          <span className="text-2xl font-medium">Price: ${state.price}</span>
          <span className="text-md leading-5 text-neutral-500">
            {state.description}
          </span>
        </div>
      </div>
    </div>
  );
};;

export default ProductDetails;
