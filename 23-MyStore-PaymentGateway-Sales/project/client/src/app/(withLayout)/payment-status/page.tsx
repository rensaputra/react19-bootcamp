import PaymentStatus from "@/screens/payment-status";
import { SearchParams } from "next/dist/server/request/search-params";
import { retrieveCheckoutSession } from "@/actions/stripeActions";

const PaymentStatusPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { session_id } = await searchParams;
  if (session_id && typeof session_id === "string") {
    const session = await retrieveCheckoutSession(session_id);
    console.log("Checkout Session:", session);
  }
  return <PaymentStatus />;
};

export default PaymentStatusPage;
