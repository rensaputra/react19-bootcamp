import Image from "next/image";
import { StarIcon } from "../icons";
import Button from "./Button";
import { Product } from "@/types";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg w-full h-full min-h-[624px] px-5">
      <Image
        className="w-full h-full rounded-t-xl max-h-96 object-contain"
        src={`${process.env.BASE_URL}${product.image}`}
        width={0}
        height={0}
        sizes="100vw"
        alt="Product Image"
      />

      <div className="space-y-4">
        <div className="space-y-1">
          <Link
            href={`/product/${product.id}`}
            className="text-2xl font-semibold leading-5"
          >
            {product.name}
          </Link>
          <p className="text-md text-gray-400 truncate">
            {product.description}
          </p>
        </div>
      </div>

      <div className="space-y-0">
        <div className="flex justify-between items-center space-y-4">
          <div className="flex gap-x-3 items-center text-xl font-semibold">
            <span className="text-gray-500 line-through">${product.mrp}</span>
            <span className="text-2xl">${product.sellPrice}</span>
          </div>
          <div>
            <span className="text-gray-400 text-md">
              {product.currentStock} left
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1">
            {[...(Array(product?.rating) || [])].map((_, index) => {
              return <StarIcon key={index} />;
            })}
          </div>
          <div className="product-type-label">{product.productType.name}</div>
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
