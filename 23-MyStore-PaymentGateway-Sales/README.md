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

## Rendering Stripe's embedded checkout form

- To keep the secret key safe, a server action is created to pass the client secret securely to the client side without exposing it publicly.
- The embedded checkout form is rendered only after the client secret is set in state to avoid errors
- **EmbeddedCheckoutProvider** acts as a wrapper or context provider that initializes Stripe's payment environment. It takes the Stripe promise object and options (including the client secret) to securely set up the checkout session.
- **EmbeddedCheckout** is the actual component that renders the pre-built Stripe checkout form inside your app.
- To securely pass the Stripe secret key value to the client side, you create a server action on the server that does the following:
  - In a file like `StripeActions.js`, define an async function (e.g., `createCheckoutSession`).
  - Inside this function, initialize a Stripe instance using the secret key from your environment variables (`process.env.StripeSecretKey`).
  - Use this Stripe instance to create a checkout session with the necessary configuration (like payment mode, customer email, product details, and return URL).
  - The checkout session object includes a `client_secret` which you return from this server action
- When you call `stripeInstance.checkout.sessions.create`, it sends a request to Stripe's backend servers to set up a new checkout session.
  - Validates the payment details and configuration you provide (like payment mode, customer info, products, and return URLs).
  - Creates a secure payment intent and session that manages the payment flow.
  - Generates a client secret token within the session object, which your frontend uses to securely render the embedded checkout form.

Pull request: https://github.com/rensaputra/react19-bootcamp/pull/3

## Creating checkout session dynamically

- The checkout session is created dynamically by passing the logged-in customer's data and cart products to Stripe's API, replacing static values with real-time data.
- Validation is added to restrict access to the checkout page only for logged-in users with non-empty carts, improving security and user experience.
- The checkout button in the cart is disabled if the cart is empty or the user is not logged in, with a prompt to log in before proceeding.
- In addition to that access to the checkout page is also protected by checking the user's authentication status and cart contents before allowing access, this is implemented using React's `useEffect` hook to redirect unauthorized users back to the cart page.
- The video demonstrates a complete payment flow including test payment with Stripe and handling redirection after payment.

https://github.com/rensaputra/react19-bootcamp/pull/4
https://github.com/rensaputra/react19-bootcamp/pull/5
