import Image from "next/image";
import { StarIcon } from "../icons";
import Button from "./Button";
const ProductCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg w-full h-full min-h-[624px] px-5">
      <Image
        className="w-full h-full rounded-t-xl max-h-96"
        src="/next.svg"
        width={0}
        height={0}
        sizes="100vw"
        alt="Product Image"
      />

      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-2xl font-semibold leading-5">Product Name</span>
          <p className="text-md text-gray-400 truncate">
            This is product description.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        <div className="flex justify-between items-center space-y-4">
          <div className="flex gap-x-3 items-center text-xl font-semibold">
            <span className="text-gray-500 line-through">$19.99</span>
            <span className="text-2xl">$16.99</span>
          </div>
          <div>
            <span className="text-gray-400 text-md">12 left</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1">
            {[...Array(5)].map((_, index) => {
              return <StarIcon key={index} />;
            })}
          </div>
          <div className="product-type-label">Product Type</div>
        </div>
      </div>

      <div className="flex gap-x-2 mt-5">
        <Button className="custom-outline-btn w-full">Add to Basket</Button>
        <Button className="w-full">Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductCard;
