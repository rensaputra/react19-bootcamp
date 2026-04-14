# MyStore: Payment Gateway & Sales

## Introduction

Key takeaways from the video on implementing the Stripe checkout flow:

- Users add products to their cart, select quantity and size, then initiate checkout which creates a Stripe checkout session.
- Stripe's embedded checkout form collects user details and payment information securely.
- After successful payment, users are redirected to a success page, and the transaction is recorded in the database with stock updates.
- An admin buyers master page is created to display all buyers' information.

## What is payment gateway?

- A payment gateway securely processes online payments by encrypting customer payment details and connecting the business with banks and payment processors.
- It verifies the payment method and funds availability before approving or declining transactions.
- Payment gateways include security features like fraud detection algorithms and verification checks to protect against fraud.

## Basic configuration of Stripe

- First we create a dedicated checkout page and component in the client application to handle the checkout process.
- We use the useRouter hook to navigate users to the checkout page when they click the checkout button in the cart.
- We learn to install Stripe SDK dependencies and securely configure Stripe with publishable and secret keys using environment variables.
  - The command we use to install Stripe SDK dependencies is `npm install stripe @stripe/stripejs react-stripe-js`.
  - Then we create an account on Stripe and obtain the publishable key and secret key, which are used to authenticate API requests and initialize StripeJS in our application.
  - The **publishable key** is used on the client side to initialize StripeJS and can be stored in an environment variable with a public prefix (like NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  - The **secret key** is used on the server side and must be kept private, so it should be stored in an environment variable without any public prefix to avoid exposure.
- The loadStripe method is used to initialize StripeJS with the publishable key for embedding Stripe components.
  - To load Stripe in your React app, you use the `loadStripe` method from the StripeJS library
    ```javascript
    import { loadStripe } from "@stripe/stripe-js";
    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    ```
    Here, `loadStripe` takes your publishable key (stored securely in an environment variable) and returns a promise that resolves when StripeJS is ready to use. This setup is essential before embedding Stripe components in your checkout page.
