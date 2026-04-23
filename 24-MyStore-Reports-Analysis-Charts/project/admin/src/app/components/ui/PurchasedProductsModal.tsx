import { CloseIcon } from "@/app/components/icons";
import { SalesTransaction } from "@/types";

const PurchasedProductsModal = ({
  onClose,
  salesTransactions,
}: {
  onClose: () => void;
  salesTransactions: SalesTransaction[] | undefined;
}) => {
  console.log("Sales Transactions:", salesTransactions);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black/50 fixed inset-0" onClick={onClose} />
      <div className="relative p-6 w-full max-w-fit h-full md:h-auto">
        <div className="relative text-center bg-white rounded-lg shadow-lg p-6">
          <button onClick={onClose} className="close-icon-btn">
            <CloseIcon />
          </button>
          <table className="custom-table mt-4">
            <thead className="border-y-2 border-gray-400">
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Selling Price</th>
                <th>Purchased Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium text-lg text-center">
              {salesTransactions && salesTransactions.length > 0 ? (
                salesTransactions.map((transaction, index) => (
                  <tr key={transaction.id}>
                    <td>{index + 1}</td>
                    <td>{transaction.product?.name}</td>
                    <td>${transaction.unitPrice.toFixed(2)}</td>
                    <td>{transaction.qtyPurchased}</td>
                    <td>${transaction.total.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center!">
                    No purchased products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchasedProductsModal;
