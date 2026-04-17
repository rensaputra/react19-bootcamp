import Stripe from "stripe";

const PaymentStatus = ({ session }: { session: Stripe.Checkout.Session }) => {
  return <div>Payment Status</div>;
};

export default PaymentStatus;
