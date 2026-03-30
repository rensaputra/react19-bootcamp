import Link from "next/link";
import Image from "next/image";
import { EditIcon, TrashIcon } from "@/app/components/icons";
import { DeleteButton } from "@/app/components/ui/DeleteButton";

const ProductsScreen = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl p-2">Products Management</h1>
        <button>
          <Link href="/products/add" className="custom-primary-btn">
            Add Product
          </Link>
        </button>
      </div>

      <hr className="my-5" />

      <div className="mt-20">
        <table className="custom-table">
          <thead className="border-y-2 border-gray-400">
            <tr>
              <th>Product</th>
              <th>Product Type</th>
              <th>MRP</th>
              <th>Selling Price</th>
              <th>Current Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-medium text-lg text-center">
            <tr>
              <td className="grid grid-cols-[auto_1fr] gap-2 items-center">
                <Image
                  src="/user.svg"
                  alt="Product Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-20 h-20"
                />
                <div className="flex flex-col self-center">
                  <span>Product Name</span>
                  <span className="text-sm text-gray-500 truncate max-w-52">
                    This is the product description with truncate.
                  </span>
                </div>
              </td>
              <td>Kid's Clothing</td>
              <td>$9.99</td>
              <td>$7.99</td>
              <td>50</td>
              <td className="text-green-500">Active</td>
              <td>
                <div className="flex self-center gap-x-3">
                  <Link href="/products/edit">
                    <EditIcon />
                  </Link>
                  <DeleteButton>
                    <TrashIcon />
                  </DeleteButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsScreen;
