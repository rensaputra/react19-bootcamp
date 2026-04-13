# 22. MyStore: Authentication

## Creating login page

In this lecture, we learn how to create a dedicated login page for the admin section of the MyStore ecommerce app with React and Tailwind CSS. Key takeaways include:

- Setting up a separate layout without the sidebar for the login page to keep it clean and focused.
- Building the login component with a styled card centered on the screen using Tailwind CSS utility classes.
- Creating a login form with username and password fields, including validation requirements like minimum password length.
- Adding a submit button and adjusting spacing for a polished UI.

## Introduction to JOSE + JWT

In this lecture, we explore the JOSE (JSON Object Signing and Encryption) framework and JWT (JSON Web Tokens) for secure authentication in web applications. Key takeaways include:

- Jose (JSON Object Signing and Encryption) is a JavaScript-based framework that ensures the security of JSON data through standards for integrity, authenticity, and confidentiality.
- Important components of Jose include JWS (JSON Web Signature) for verifying data integrity and sender identity, JWE (JSON Web Encryption) for encrypting data so only intended recipients can read it, JSON Web Key for representing cryptographic keys, and JSON Web Algorithms for defining signing and encryption methods.
- Combining Jose with JWT leverages these security features to create a robust authentication flow.

## Setup authentication flow using JOSE + JWT

In this lecture, we implement an authentication flow using JOSE and JWT in our MyStore ecommerce app. Key takeaways include:

- The process involves creating JWT tokens asynchronously using the `SignJWT` class, setting protected headers (like algorithm type), issued-at timestamps, and expiration times.
- Tokens are signed with a 32-character secret key, which is encoded for added security.
- Verification of JWT tokens is done asynchronously using the JWT verify method, which returns the payload if valid or false if invalid

## Create server action for login

In this lecture, we create a server action for handling user login in our MyStore ecommerce app. Key takeaways include:

- Verifying user credentials by checking the username and comparing the entered password with the encrypted password stored in the database using bcrypt.
- Generating a JWT token asynchronously with user information using the Jose library, including setting protected headers, issued-at timestamps, and expiration times.
- Handling invalid login attempts by redirecting with error messages.
- Storing the generated JWT token in cookies to maintain user authentication across the site

## Cookie-based authentication

In this lecture, we learn how to implement secure cookie-based authentication using JWT tokens in a React full-stack app. Key takeaways include:

- Cookies are a safer and more convenient way to store JWT tokens compared to local or session storage, offering security features like HTTP only, secure, and same site flags.
- You can set and retrieve cookies on the server side in Next.js, enabling better control and protection of authentication tokens.
- Proper cookie configuration helps protect against common security threats like `cross-site scripting (XSS)` and `cross-site request forgery (CSRF)`.
- After storing the JWT token in a cookie, you can use it to authenticate users and redirect them securely within your app.

### Cookie-based authentication continued

- **HTTP only flag**: Prevents client-side JavaScript from accessing cookies, protecting against `cross-site scripting (XSS)` attacks.
- **Secure flag**: Ensures cookies are only sent over HTTPS connections, enhancing data security.
- **Same site attribute**: Restricts cookies from being sent with cross-site requests, helping prevent `cross-site request forgery (CSRF)` attacks.
- **Path and domain settings**: Control where cookies are accessible, limiting exposure to specific paths or domains.

## Handling private and public routes using middleware/proxy

In this lecture, we learn how to secure your React full-stack ecommerce app by implementing middleware that manages private and public routes based on JWT authentication. Key takeaways include:

- Creating middleware to check if a user is authenticated by verifying the JWT token stored in cookies.
- Redirecting unauthorized users trying to access private routes to the login page, and preventing logged-in users from accessing public routes like login.
- Excluding static asset routes (like images and CSS) from middleware to ensure proper loading of styles and resources.
- Proxy allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

`Good to know: Starting with Next.js 16, Middleware is now called Proxy to better reflect its purpose. The functionality remains the same.`

## Fetching authenticated user data

In this lecture, we learn how to securely fetch logged-in user data and display the username dynamically in your React full-stack ecommerce app. Key takeaways include:

- Retrieving the JWT token from cookies and verifying it on the server side to authenticate the user.
- Using the verified token data to fetch unique user information from the database.
- Passing the fetched user data as props to components like the sidebar for dynamic rendering.

## Implementing logout with server action

In this lecture, we learn how to implement secure logout functionality in a React full-stack ecommerce app. Key takeaways include:

- Creating a server-side function to delete the JWT token cookie, effectively logging out the user.
- Using server actions to handle logout and redirect the user to the login page.
- Enhancing security by deleting cookies when tokens expire or are detected as invalid, both in JWT verification and middleware.
- Adding a logout icon in the UI that triggers the logout action, with proper styling and event handling.

## Authenticate all server actions of admin section

In this lecture, we learn how to secure server actions in the admin app by verifying JWT tokens before executing any operation. Key takeaways include:

- Implementing JWT token verification in all server actions to ensure only authenticated users can perform sensitive operations.
- Simulating token expiration to test the security flow, where expired tokens prevent actions and redirect users to the login page.
- Enhancing overall security by authenticating server actions, which is crucial for protecting admin functionalities in full-stack ecommerce applications.

## Creating authentication routes in client section

In this lecture, we learn how to implement authentication on the client side of a React full-stack ecommerce app. Key takeaways include:

- Creating separate folder groups for routes with and without layouts to control where the header (navbar) appears.
- Moving login and signup pages into a layout group without the header for a clean authentication interface.
- Keeping main app pages like product and cart inside a layout group that includes the header for consistent navigation.

## Creating interface for authentication routes

In this video, we learn how to implement authentication routes for the client side of a React full-stack ecommerce app. Key takeaways include:

- Reusing and adapting components from the admin section to maintain consistency and efficiency.
- Creating a label component to support form inputs in the client app.
- Building login and signup forms with appropriate fields (like email and name), styling them with Tailwind CSS for a polished look.
- Setting up navigation links between login and signup pages for smooth user experience.

## Creating buyer table in the database

In this lecture, we learn how to set up the buyer master table in the database to store buyer information for authentication in the client section of your ecommerce app. Key takeaways include:

- Defining a database model with fields like `id`, `customerName`, unique `email`, `password`, optional `address` and `city`, and a `createdAt` timestamp for creation.
- Using Prisma to **run a migration** that creates the buyer master table in the database.
- Verifying the table structure in the database to ensure it matches the schema.

## Creating sign-up API

In this lecture, we learn how to create a secure customer signup API for the admin section of an ecommerce app. Key takeaways include:

- Creating a POST API route that receives customer signup data.
- Checking if the customer already exists to avoid duplicates.
- Hashing the customer's password securely using bcrypt before storing.
- Saving the new customer data in the buyer master database table.
- Generating a JWT token for the new user to enable authentication.
- Returning a success response with the user data and token.

## testing signup API using Postman

In this lecture, we learn how to use Postman as a user-friendly API testing platform to simulate client requests for your ecommerce app's backend APIs. Key takeaways include:

- Postman acts as a fake client to build, test, and manage REST APIs, allowing you to send requests and view responses without a frontend.
- You can create API collections and workspaces to organize your API tests and even auto-generate documentation.
- The video demonstrates testing a signup API by sending a POST request with JSON data (name, email, password) and handling responses for success (user created with token) and errors (duplicate user).

## Creating login API

In this lecture, we learn how to create a secure login API for customers in the admin section of an ecommerce app. Key takeaways include:

- Validating user credentials by fetching customer data from the database and comparing the entered password with the stored hashed password using `bcrypt`.
- Generating a JWT token with user information to enable secure authentication.
- Handling errors gracefully by sending appropriate status codes and messages for user not found or invalid credentials.
- Returning a success response with the logged-in user data and the authentication token.

## Testing the login API using Postman

In this lecture, we learn how to test the login API for customers using Postman. Key takeaways include:

- Using Postman to send POST requests with JSON login credentials (email and password) to the login endpoint.
- Successfully logging in returns a response with an authentication token.
- Handling error responses such as "user not found" and "invalid credentials" when login fails.

## Implementing signup functionality in the client section

In this lecture, we learn how to implement client-side signup functionality in a React full-stack ecommerce app. Key takeaways include:

- Creating a server action to handle form submission and call the signup API with user data.
- Storing the JWT authentication token securely in cookies to maintain user sessions.
- Redirecting users to the home page upon successful signup.
- Dynamically displaying error messages on the signup form when signup fails (e.g., user already exists).

## Implementing customer login functionality

- We create a server action that receives form data, calls the login API, and handles the response.
- Error handling is implemented to redirect users with meaningful messages if login fails.
- On successful login, the JWT token is securely stored in cookies with a set expiration.
- Users are redirected to the home page after logging in, and the token in cookies maintains their authenticated session.

## API to fetch unique customer's data

In this lecture, we learn how to securely fetch logged-in user data and display the username dynamically in your React full-stack ecommerce app. Key takeaways include:

- Retrieving the JWT token from cookies and verifying it on the server side to authenticate the user.
- Using the verified token data to fetch unique user information from the database.
- Passing the fetched user data as props to components like the sidebar for dynamic rendering.

## Fetching customer's data using API in the client section

In this lecture, we learn how to securely fetch and display logged-in customer data in your React full-stack ecommerce app. Key takeaways include:

- Creating a server action that fetches customer data from an API using JWT tokens stored in cookies for authentication.
- Handling invalid or expired tokens by deleting them instead of redirecting, allowing access to public routes without login.
- Using the useEffect hook to call the server action on component load and storing the fetched customer data in a global state for use across components.
- Dynamically displaying the customer's name in the profile dropdown and implementing conditional logic to redirect unauthenticated users to the login page when they interact with user-specific UI elements.

## Logout functionality in the client section

- A server-side function is created to delete the JWT token cookie, effectively logging out the user.
- The logout action is triggered via a server action called from the UI when the user clicks the logout option.
- After logout, the app state is reset to reflect the logged-out status.
