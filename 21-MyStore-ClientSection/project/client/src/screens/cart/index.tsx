import Image from "next/image";
import { StarIcon, PlusCircleIcon, MinusCircleIcon } from "@/components/icons";
import Button from "@/components/ui/Button";

const CartScreen = () => {
  const sizeOptions = [
    { label: "S", value: "smallSize" },
    { label: "M", value: "mediumSize" },
    { label: "L", value: "largeSize" },
  ] as const;

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold">Cart</h1>
      <div className="grid grid-cols-4 gap-5 my-5">
        <div className="col-span-3 space-y-5">
          <div className="w-full bg-white shadow-md rounded-xl grid grid-cols-[auto_1fr]">
            <Image
              src={`${process.env.BASE_URL}/uploads/1774863561305.jpg`}
              alt="Product Name"
              width={0}
              height={0}
              sizes="100vw"
              className="w-60 h-60 object-cover rounded-l-xl m-auto"
            />
            <div className="flex flex-col p-8">
              <div className="flex justify-between">
                <h1 className="text-2xl font-medium">Product Name</h1>
                <div className="product-type-label">Product Type</div>
              </div>
              <div className="flex gap-x-1">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>

              <div className="text-xl flex gap-x-3 items-center">
                <span className="text-gray-500 line-through font-medium">
                  $16.99
                </span>
                <span className="text-2xl font-semibold">$14.99</span>
              </div>

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
                  {sizeOptions.map((item, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={`sizes-${item.value}`}
                        name="sizes"
                        className="hidden peer"
                      />
                      <label
                        htmlFor={`sizes-${item.value}`}
                        className="checkbox-button-label"
                      >
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>Cart Summary</div>
      </div>
    </div>
  );
};

export default CartScreen;
