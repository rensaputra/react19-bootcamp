import { EditIcon } from "@/app/components/icons";
import Link from "next/link";
import { DeleteButton } from "@/app/components/ui/DeleteButton";
import { deleteUser } from "@/actions/userActions";
export default function ProductTypeScreen() {
  const productTypes = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Books" },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl p-2">Product Type Management</h1>
        <button>
          <Link href="/product-type/add" className="custom-primary-btn">
            Add Product Type
          </Link>
        </button>
      </div>

      <hr className="my-5" />

      <div className="mt-20">
        <table className="custom-table">
          <thead className="border-y-2 border-gray-400">
            <tr>
              <th>Sr. No</th>
              <th>Product Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-medium text-lg text-center">
            {productTypes.map((type, index) => (
              <tr
                key={type.id}
                className="text-gray-700 font-medium text-lg text-center"
              >
                <td>{index + 1}</td>
                <td>{type.name}</td>
                <td className="flex items-center gap-x-3">
                  <Link
                    href={`/product-type/edit/${type.id}`}
                    className="w-fit"
                  >
                    <EditIcon />
                  </Link>
                  <DeleteButton
                    id={type.id}
                    onDelete={deleteUser}
                    deleteType="product type"
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tbody className="text-gray-700 font-medium text-lg text-center"></tbody>
        </table>
      </div>
    </div>
  );
}
