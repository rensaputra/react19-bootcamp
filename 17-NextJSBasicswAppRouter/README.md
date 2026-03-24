# 17. NextJS Basics with App Router

## Defining routes

- **Creating Routes**: To create a new route, you need to create a folder with the route name inside the `app` folder and add a `page.js` file inside that folder.
- **Component Naming**: The component name inside the `page.js` file does not have to match the route name.
- **Rendering Pages**: The `page.js` file should export a React component that returns JSX to render the content for that route.

## Nested routes

- **Nested Routes**: You can create nested routes by following the folder structure. For example, to create a route like `/about/settings`, you create a `settings` folder inside the `about` folder and add a `page.js` file inside it.
- **Leaf Segment**: The last part of the route (e.g., `settings` in `/about/settings`) is referred to as the leaf segment in Next.js.
- **Component Creation**: Copy the component code from the parent route, update the component name and text, and save it to create the nested route.

## Linking pages with Link

- **Anchor Tags**: Using anchor tags (`<a>)` for navigation in Next.js will reload the entire page, which is not ideal for single-page applications (SPAs).
- **Link Component**: The Link component from `next/link` should be used instead of anchor tags to enable SPA navigation without reloading the page.
- **Implementation**: Replace anchor tags with the Link component and import it from `next/link` to achieve smooth navigation between routes in a Next.js application.

  ```
  import Link from 'next/link';

  function Navigation() {
    return (
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    );
  }
  ```

## React server component vs client component

- **Client vs. Server Components**: React is primarily a client-side technology, but Next.js uses server components that render on the server and deliver to the client.
- **useState Hook**: The `useState` hook works only in client components. To use it, you need to specify the component as a client component by adding `use client` at the top of the file.
- **Creating a Counter Component**: You can create a counter component by using the `useState` hook to manage the counter state and configuring the `onClick` events for incrementing and decrementing the counter value.

---

- **Client Components**: Rendered on the browser, execute after the page loads, and handle JavaScript events triggered by user actions. They are slower due to JavaScript execution and client device performance.
- **Server Components**: Rendered on the server and send the rendered HTML to the client. They do not include JavaScript and can only render static data or fetch data on the server before rendering the page. They are faster as they directly send the rendered HTML page to the client.

## Error page

- **Error Component** : Create an `error.js` file inside the `app` folder to handle errors automatically.
- **Client Component**: Ensure the error component is a client component by adding `use client` at the top of the file.
- Error Object: The error component receives an error object that can be used to display error messages or custom messages for better user experience.

## Dynamic routes and route params

- **Dynamic Routes**: You can create dynamic routes by naming the folder with square brackets, like [`slug`], inside the `products` folder.
- **Dynamic URL Handling**: The dynamic value (slug) is accessible in the component through the `params` object passed as props.
- **Component Configuration**: Use the `Link` component to create links to these dynamic routes, and render the dynamic values within the component.

## Asynchronous server component

- **Asynchronous Server Components**: You can make a component asynchronous by adding `async` before the component function, allowing you to use `await` for data fetching directly within the component.
- **Performance and SEO**: Asynchronous server components fetch data and render components on the server, resulting in faster rendering and better SEO performance.
- **Data Fetching**: This approach ensures that data is fetched before rendering, improving performance and user experience.
- **Server-Side Rendering**: Next.js allows server components to fetch data directly from the database, avoiding the need for traditional API calls.
- **Reduced Code Complexity**: By fetching data directly on the server, the need for client-side data fetching logic (like using the `useEffect` hook) is reduced, simplifying the code.

## Practice project

[Source code](/17-NextJSBasicswAppRouter/project/try-app/)
