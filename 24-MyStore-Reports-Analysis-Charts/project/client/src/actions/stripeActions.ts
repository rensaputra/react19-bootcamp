"use server";

import { ProductInCart, User } from "@/types";
import Stripe from "stripe";
import { SIZES } from "@/types/product";

export async function createCheckoutSession(
  cartItems: ProductInCart[],
  customerData: User,
) {
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const checkoutSession = await stripeInstance.checkout.sessions.create({
    ui_mode: "embedded_page",
    invoice_creation: {
      enabled: true,
    },
    customer_email: customerData.email,
    submit_type: "pay",
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["AU", "NZ"],
    },
    line_items: cartItems.map((item) => {
      return {
        price_data: {
          currency: "aud",
          product_data: {
            name: `${item.name} (Size: ${SIZES[item.size]})`,
          },
          unit_amount: item.sellPrice * 100, // Convert to cents
        },
        quantity: item.quantity,
      };
    }),
    metadata: {
      products: JSON.stringify(
        cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          sellPrice: item.sellPrice,
          size: item.size,
        })),
      ),
      customerId: customerData?.id,
    },
    mode: "payment",
    return_url: `http://localhost:3000/payment-status?session_id={CHECKOUT_SESSION_ID}`,
  });

  return { clientSecret: checkoutSession.client_secret };
}

export async function retrieveCheckoutSession(sessionId: string) {
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const session = await stripeInstance.checkout.sessions.retrieve(sessionId);
  return session;
}

export async function retrievePaymentIntent(paymentIntentId: string) {
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const paymentIntent =
    await stripeInstance.paymentIntents.retrieve(paymentIntentId);
  return paymentIntent;
}

export async function retrievePaymentMethod(paymentMethodId: string) {
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const paymentMethod =
    await stripeInstance.paymentMethods.retrieve(paymentMethodId);
  return paymentMethod;
}
