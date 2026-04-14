import { loadStripe } from "@stripe/stripe-js";

const Checkout = async () => {
  const StripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  );
  console.log("Stripe:", await StripePromise);
  return <div>Checkout</div>;
};

export default Checkout;
