import PaymentStatus from "@/screens/payment-status";
import { SearchParams } from "next/dist/server/request/search-params";
import {
  retrieveCheckoutSession,
  retrievePaymentIntent,
  retrievePaymentMethod,
} from "@/actions/stripeActions";
import { redirect } from "next/navigation";
import { PaymentStatusSession } from "@/types/api-response";

const PaymentStatusPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { session_id } = await searchParams;

  if (session_id && typeof session_id === "string") {
    const session = await retrieveCheckoutSession(session_id);
    const paymentIntent = await retrievePaymentIntent(
      session.payment_intent as string,
    );
    const paymentMethod = await retrievePaymentMethod(
      paymentIntent.payment_method as string,
    );

    const updatedResObj: PaymentStatusSession = {
      address:
        session?.collected_information?.shipping_details?.address?.line1 || "",
      city:
        session?.collected_information?.shipping_details?.address?.city || "",
      customerId: session?.metadata?.customerId || "",
      customerEmail: session?.customer_email || "",
      SODateTime: session?.created || 0,
      grandTotalPrice: session?.amount_total ? session.amount_total / 100 : 0, // Convert from cents to dollars
      paymentMode: paymentMethod?.type || "unknown",
      products: JSON.parse(session?.metadata?.products || "{}"),
    };

    return <PaymentStatus session={updatedResObj} />;
  } else {
    redirect("/");
  }
};

export default PaymentStatusPage;
