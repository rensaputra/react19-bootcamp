import Link from "next/link";
import Image from "next/image";
import { EditIcon, TrashIcon } from "@/app/components/icons";
import { DeleteButton } from "@/app/components/ui/DeleteButton";
import { getProducts } from "@/actions/productActions";
import { deleteProduct } from "@/actions/productActions";

const ProductsScreen = async () => {
  const products = await getProducts();

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
            {products.map((product) => (
              <tr key={product.id}>
                <td className="grid grid-cols-[auto_1fr] gap-2 items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col self-center">
                    <span>{product.name}</span>
                    <span className="text-sm text-gray-500 truncate max-w-52">
                      {product.description}
                    </span>
                  </div>
                </td>
                <td>{product.productType.name || "-"}</td>
                <td>${product.mrp.toFixed(2) || "0.00"}</td>
                <td>${product.sellPrice.toFixed(2) || "0.00"}</td>
                <td>{product.currentStock}</td>
                <td
                  className={
                    product.isActive ? "text-green-500" : "text-red-500"
                  }
                >
                  {product.isActive ? "Active" : "Inactive"}
                </td>
                <td>
                  <div className="flex self-center gap-x-3">
                    <Link href={`/products/edit/${product.id}`}>
                      <EditIcon />
                    </Link>
                    <DeleteButton
                      id={product.id}
                      onDelete={deleteProduct}
                      deleteType="product"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsScreen;
