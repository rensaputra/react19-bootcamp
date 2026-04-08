"use client";

import Image from "next/image";
import {
  StarIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "@/components/icons";
import Button from "@/components/ui/Button";
import { useProductContext } from "@/store/ProductContext";
import { ProductSize } from "@/types";

const CartScreen = () => {
  const sizeOptions = [
    { label: "S", value: "smallSize" },
    { label: "M", value: "mediumSize" },
    { label: "L", value: "largeSize" },
  ] as const;

  const { cartItems, setCartItems } = useProductContext();
  console.log("cartItems", cartItems);
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold">Cart</h1>
      <div className="grid grid-cols-4 gap-5 my-5">
        <div className="col-span-3 space-y-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white shadow-md rounded-xl grid grid-cols-[auto_1fr]"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
                  alt={item.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-60 h-60 object-contain rounded-l-xl m-auto"
                />
                <div className="flex flex-col p-8 justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h1 className="text-2xl font-medium">{item.name}</h1>
                      <div className="product-type-label">
                        {item.productType.name}
                      </div>
                    </div>
                    <div className="flex gap-x-1">
                      {[...Array(item.rating)].map((_, index) => (
                        <StarIcon key={index} />
                      ))}
                    </div>
                  </div>

                  <div className="text-xl flex gap-x-3 items-center">
                    <span className="text-gray-500 line-through font-medium">
                      ${item.mrp.toFixed(2)}
                    </span>
                    <span className="text-2xl font-semibold">
                      ${item.sellPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-centers justify-between">
                    <div className="flex gap-x-4 items-center">
                      <Button className="p-0! bg-transparent! text-black!">
                        <MinusCircleIcon className="w-8 h-8" />
                      </Button>
                      <span className="text-xl font-semibold">1</span>
                      <Button className="p-0! bg-transparent! text-black!">
                        <PlusCircleIcon className="w-8 h-8" />
                      </Button>
                    </div>
                    <div className="flex gap-x-4 items-center mt-auto">
                      <span>Size:</span>
                      <div className="flex gap-x-2">
                        {sizeOptions.map((size, index) => (
                          <div key={index}>
                            <input
                              type="radio"
                              id={`sizes-${size.value}-${item.id}`}
                              name={`sizes-${item.id}`}
                              className="hidden peer"
                              checked={item.size === size.value}
                              value={size.value}
                              onChange={() =>
                                setCartItems(
                                  cartItems.map((product) =>
                                    product.id === item.id
                                      ? {
                                          ...product,
                                          size: size.value as ProductSize,
                                          quantity: 1,
                                        }
                                      : product,
                                  ),
                                )
                              }
                            />
                            <label
                              htmlFor={`sizes-${size.value}-${item.id}`}
                              className="checkbox-button-label"
                            >
                              {size.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Button className="bg-red-500! w-fit! flex! gap-2! items-center!">
                        <TrashIcon />
                        <span>Remove</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center col-span-2 my-5">
              <span className="text-2xl font-medium">Your cart is empty.</span>
            </div>
          )}
        </div>

        <div className="sticky top-5 h-fit">
          <div className="flex flex-col justify-between gap-y-5 bg-white shadow-md rounded-xl p-5">
            <h1 className="border-b font-semibold text-2xl border-gray-400">
              Cart Summary
            </h1>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="truncate">Product Name</span>
                <span className="text-end">$12.99</span>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="grid grid-cols-2 gap-2 text-xl font-semibold mt-2">
                <span>Total Amount</span>
                <span className="text-end">$12.99</span>
              </div>
            </div>
          </div>
          <Button className="w-full mt-2">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
