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
      <div className="relative p-6 w-full max-w-lg h-full md:h-auto">
        <div className="relative text-center bg-white rounded-lg shadow-lg p-6">
          <button onClick={onClose} className="close-icon-btn">
            <CloseIcon />
          </button>
          <h1>This is a purchased products modal.</h1>
          <table>
            <thead></thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchasedProductsModal;
