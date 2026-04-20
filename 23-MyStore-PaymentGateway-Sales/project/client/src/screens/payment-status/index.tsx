import Link from "next/link";
import { CheckBadgeIcon } from "@/components/icons";

const PaymentStatus = ({ status }: { status: string }) => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="bg-white rounded-xl shadow-lg w-3xl px-10 py-20">
        <div className="flex flex-col gap-y-6 justify-center">
          <CheckBadgeIcon className="text-green-500 h-24 w-24 self-center" />
          <p className="text-center text-2xl font-semibold">{status}</p>
          <Link className="custom-btn w-fit self-center" href="/">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
