"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { createCheckoutSession } from "@/actions/stripeActions";
import { useEffect, useState } from "react";
import { useProductContext } from "@/store/ProductContext";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const Checkout = () => {
  const [options, setOptions] = useState({ clientSecret: "" });
  const { cartItems, customerData } = useProductContext();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const session = await createCheckoutSession(cartItems, customerData);
        if (isMounted) {
          setOptions({ clientSecret: session.clientSecret! });
        }
      } catch (error) {
        console.error("Failed to create checkout session:", error);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {options.clientSecret && (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <div className="my-10">
            <EmbeddedCheckout />
          </div>
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
};

export default Checkout;
