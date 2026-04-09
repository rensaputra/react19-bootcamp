# 21. MyStore: Client Section

## Initiating client section

We practiced how to set up the client application for the ecommerce project by:

- Running the client app using npm to start the development server.
- Updating the meta information in the layout.tsx file to customize the page title.
- Replacing the default home page content with your own heading.
- Clearing predefined styles and applying new global styles using Tailwind CSS to prepare the app's look and feel.

## Creating header component

We created a header component for the React ecommerce client application by:

- Building the header component and integrating it into the layout for consistent display across routes.
- Applying Tailwind CSS classes to style the header, including typography, padding, background color, and box shadow.
- Organizing header content with flexbox to align the store name on the left, a search bar in the center, and user/cart icons on the right.
- Adding icons from `heroicons.com` and incorporating them alongside the search input for a polished UI.

## Implementing search bar

We learned how to enhance the header's search input by:

- Wrapping the input tag with a div to contain the search icon.
- Creating a custom CSS class to style the input with height, width, padding, border, placeholder color, and focus effects using Tailwind CSS.
- Positioning the search icon inside the input using relative positioning on the wrapper and absolute positioning on the icon with specific size and placement.
- Ensuring the SearchIcon component receives the className prop so the styles are applied correctly.

## Joining Tailwind classes with ideal approach

We learned how to enhance your React ecommerce app's header styling by:

- Using the `tailwind-merge` library combined with `clsx` to create a utility function that merges Tailwind CSS classes cleanly, removing any undefined values to prevent rendering errors.
- Applying this utility function to icon components (`SearchIcon`, `UserIcon`, `CartIcon`) to ensure consistent and error-free class merging.
- Adjusting padding on the input field and increasing the size of icons for better visual balance and user experience.

## Adding profile dropdown

We learned how to add a profile dropdown menu in your React ecommerce app by:

- Importing the `Link` component from Next.js to create navigation links for wishlist and logout.
- Structuring the dropdown menu with Tailwind CSS classes for positioning, styling, and hover effects.
- Using React's `useState` hook to manage the dropdown's open/close state.
- Implementing a toggle function triggered by clicking the user icon to show or hide the dropdown menu.

## useRef() hook

We learned about the React useRef hook and its key benefits:

- `useRef` allows you to hold a mutable value that persists across component re-renders without triggering a re-render itself, unlike state variables.
- It returns an object with a current property that stores the value, which you can update and access directly.
- `useRef` can be used to get a reference to a DOM element, enabling you to manipulate it directly (e.g., changing styles) within your React component.

## Close profile drodown menu on outside click

- The `useRef` hook is used to create a reference to the drop-down element, allowing you to detect clicks outside of it.
- A function checks if a click event target is outside the drop-down by using the ref's current property and the contains method.
- The `useEffect` hook manages adding and removing the `mouseDown` event listener based on whether the drop-down is open, ensuring the drop-down closes when clicking outside.

## Creating input component

- A reusable input component is created in React that accepts props like `type`, `placeholder`, and `className`, along with any other attributes using the rest operator.
- The utility function `cn` is used to combine default and custom class names for styling the input component.
- The custom input component replaces the standard input tag in the header, maintaining the same UI but improving code modularity and reusability.

## Creating home page

- You learn how to create a home page component in React by organizing files and defining the component structure.
- The layout is structured into two main sections: filters and product listings, using CSS grid with Tailwind CSS classes.
- Applying a container class around content adds consistent spacing on the sides, improving the page's visual layout.

## Creating filters section

- You learn how to create a filters section component in React, organizing it with JSX and applying Tailwind CSS for styling.
- The video shows how to build category filters using checkboxes, styled with custom classes and interactive effects like hover and selection states.
- It demonstrates rendering filter options dynamically by mapping over a static array and arranging them in a responsive row layout using flexbox.

## Creating custom accordion component

- A custom accordion component is created with a down arrow icon to enhance UI clarity.
- The accordion's open/close state is managed using URL search parameters, allowing the state to persist in the browser's address bar.
- React Router's `useRouter` hook is used to update search parameters dynamically, enabling toggling of the accordion based on user interaction.
- A utility function converts JavaScript objects into query strings for seamless URL updates.

## Completing custom accordion component

- The accordion component is enhanced with an animated arrow icon that rotates based on whether the accordion section is open or closed.
- The accordion's open state is managed using an array and conditional checks, enabling dynamic UI updates.
- The accordion code is refactored into a reusable React component that accepts props like `title`, `type`, `children`, and `state handlers`, promoting modularity and reusability.

## Continue on filter section

- Multiple accordion components are added for different filters like `sort by`, `price range`, `rating`, and `availability` by reusing the accordion component with modified props.
- Options arrays are created for each filter category, containing label and value pairs, which are then dynamically rendered inside the respective accordions.
- Proper handling of input IDs and labels ensures accessibility and correct mapping of options within each filter accordion.

## Creating price range slider component

- The `rc-slider` library is used to create a dynamic price range slider component in React.
- The slider's minimum and maximum values are passed as props, making the component reusable and configurable.
- The slider's value is synchronized with URL search parameters, allowing the filter state to persist and update dynamically.
- Styling is applied using Tailwind CSS and importing `'rc-slider's` CSS to ensure proper rendering.

## Creating product card component

- You learn how to create a styled product card component in React using Tailwind CSS for layout and appearance.
- The component dynamically renders product details including name, description, prices (MRP and selling price), current stock, and product type.
- Star icons for product ratings are rendered dynamically by mapping over an array, demonstrating how to visualize ratings effectively.

## Completing product card component

- The video shows how to improve the product card layout by grouping pricing and rating rows with spacing adjustments.
- It demonstrates adding 'Add to Cart' and 'Buy Now' buttons with flexbox layout and consistent styling using Tailwind CSS.
- Custom button styles are created, including a filled primary button and an outline button, to match the admin panel's design.

## Creating button component

- A reusable button component is created in React that accepts props like `type`, `onClick`, `className`, `children`, and other attributes using the rest operator.
- The utility function `cn` is used to combine default and custom class names for consistent styling.
- Replacing standard buttons with this custom component maintains the UI while promoting a component-based architecture, improving code modularity and reusability.

## API creation for product listing

- You learn how to create a fixed-port API route in Next.js to fetch product data from the admin database for dynamic product listings.
- The video demonstrates using Next.js's `NextResponse` utility to send JSON responses and how to fetch data with `db.product.findMany`, including related product types.
- Error handling is implemented with a `try-catch` block to manage API response statuses and messages effectively.

## Dynamic product rendering using server action

- Use environment variables to store the `BASE_URL` for API requests, making the code cleaner and easier to maintain.
- Next.js aggressively caches server actions, which can cause stale data; clearing the `.next` cache folder and restarting the app helps fetch fresh data.
- Pass fetched product data as props to components and dynamically render product details including `images`, `names`, `prices`, `stock`, `ratings`, and `product types`.
- Configure Next.js to allow images from specific domains (like localhost) in `next.config.js` to properly display images.

## API creation for fetching product types

- You learn how to create a dynamic API route in `Next.js` to fetch product types from the database for the client-side category filter.
- The API uses an async function with `db.productType.findMany` to retrieve product types and returns them with a success message in JSON format.
- Proper error handling is implemented to manage API response statuses and messages.

## Dynamic product type rendering using API

- You learn how to fetch product types dynamically from a backend API using an async function in the client-side React code.
- The fetched data is transformed by mapping product type names and IDs into label-value pairs suitable for UI components.
- This transformed data is passed as props to child components, enabling dynamic rendering of product categories in the filter section.

## Set filter values into the search params

- Filter values are managed using URL search parameters, allowing the app to **reflect** and **persist** filter selections dynamically.
- Input elements for filters like category, sort by, rating, and stock status are linked to search params with attributes like name, value, and checked to sync UI state.
- A handler function updates the search params on filter changes, with special logic to avoid storing default 'all' values, keeping the URL clean.

## Modifying products API to apply filters

- The API extracts filter values from the query parameters of the request URL to dynamically apply filters.
- A conditional where clause object is built based on the presence of filter values like `product type`, `price range`, `rating`, and `stock availability`.
- These filters are passed to the database query method `(db.findMany)` to fetch filtered product data.
- Sorting is implemented by dynamically setting the order based on the `sortBy` parameter, allowing ascending or descending order by selling price.

## Filter functionality on client side

- Filter values are managed using URL search parameters, which are passed to the product listing API to fetch filtered product data dynamically.
- Unnecessary keys (like accordion state) are removed from the search parameters before sending the query to keep the API request clean.
- A utility function converts the filter object into a query string for the API call.
- Sorting filter values are carefully set to ensure correct ascending or descending order.
  When no products match the filters, a clear 'products not found' message is displayed to improve user experience.

## Search filter functionality

- The search filter is implemented by extracting the search term from URL search parameters and applying it to filter product names case-insensitively in the backend query.
- On the client side, the search input value is synced with the URL search params using React hooks, allowing dynamic filtering as the user types.
- This approach ensures that the product list updates in real-time based on the search term, providing a seamless and user-friendly filtering experience in the ecommerce app.

## Creating the product page

- You learn how to create a dynamic product page in Next.js using folder-based routing with dynamic parameters to display individual product details.
- Tailwind CSS is used to style the product page, including layout with grid, image styling, and text formatting for a clean, responsive design.
- The product page dynamically renders important product information such as image, name, type, ratings with star icons, pricing (special price and MRP), and stock availability.

## Completing product page

- You learn how to add a size selection section using radio buttons styled similarly to checkboxes, allowing users to select product sizes like small, medium, or large.
- A product description section is added below the size options to provide detailed information about the product.
- 'Add to Cart' and 'Buy Now' buttons are created and styled using Tailwind CSS, arranged side by side with flexbox for a clean and user-friendly layout.

## API creation for fetching a product by its ID

- You learn how to create a dynamic API route in Next.js to fetch product details by their ID.
- The API fetches product data including related product type information using database queries.
- Proper error handling is implemented with `try-catch` blocks to return meaningful error messages and status codes.

## Dyamic product details rendering using API

- You learn how to create an async function to fetch product details by ID from an API and convert the response to JSON.
- The React component is made asynchronous to fetch product data using the product ID from props and pass it dynamically to the product component.
- Product details including image, type, name, rating, price, stock, and description are rendered dynamically, with image rendering fixed by using a base URL environment variable.

## Rendering products based on status

- The product listing API is modified to fetch only products marked as active by filtering with the `isActive` flag in the database query.
- The client-side product listing reflects this filter, so inactive products are not rendered on the home page.
- The product details API also includes this active status check to prevent users from accessing details of inactive products, enhancing security and user experience.

## Creating cart page

- The cart page is created by setting up a dedicated route and component in the React 19 app using Next.js.
- The cart icon in the header is wrapped with a `Link` to navigate to the cart page, and a dynamic item count badge is styled and positioned on the icon.
- The cart page layout is structured using CSS grid into two main sections: one for displaying cart items and another for the cart summary.

## Rendering cart item card

- The cart item card is built using a CSS grid layout to place the product image next to the product details for a clean, organized look.
- Dynamic rendering of product information includes the product name, type, star ratings, MRP and selling price, and quantity controls with plus and minus buttons.
- Reusable icon components are created with customizable class names to ensure consistent styling across the app.
  Layout adjustments are made to display size options in a row with proper spacing, enhancing the user interface.

## Completing the cart UI

- The cart page UI is built by adding a remove button with a delete icon and arranging the quantity section and remove button in a row using flexbox for clean layout.
- Vertical spacing is added between product details, and grouping elements like product name and ratings helps control spacing.
- A cart summary card is created with a title, product summary with prices, total amount section with a top border, and a checkout button.
- The summary section is made sticky to keep it visible while scrolling, enhancing user experience.

## Creating context for handling products

- The Context API is used to manage and maintain cart data globally in the React 19 ecommerce app.
- A product context is created with `createContext`, and a `ProductContext` provider component is built to wrap the app's header and children components, enabling shared state.
- A `useProductContext` custom hook is created to simplify accessing the product context throughout the app.

### Prop Drilling vs Context API

- Prop drilling means passing data through many component layers, even if some intermediate components don't use that data, which can make the code harder to maintain.
- The `Context API` provides a better way by allowing components to access shared data directly without passing props through every level.
- Using `Context API` simplifies managing data in deeply nested components and makes your React code cleaner and easier to maintain.

## Implementing cart functionalities

- **Managing Cart State**: The video demonstrates how to use React's `useState` hook to manage cart items by adding and removing products dynamically.
- **Conditional UI Updates**: It shows how to conditionally change the 'Add to Cart' button to 'Remove from Cart' based on whether the product is already in the cart (use array method `some`), providing clear user feedback.
- **Handling Environment Variables**: Since client components in Next.js can only access public environment variables, the video explains how to prefix variables with `NEXT_PUBLIC_` to make them accessible.

## Making cart page dynamic

- The cart page dynamically maps over the cart items state using the `useProductContext` hook to render each cart item.
- If the cart is empty, a message "cart is empty" is displayed to inform the user.
- Static values in the cart item card are replaced with dynamic values from the cart items, including product image, name, type, rating, prices, quantity, and size.

## Enabling quantity selection

- Size selection in the cart is implemented by updating the cart items state using a context hook, mapping over products to update the selected size and resetting quantity to one.
- Quantity adjustment functions are created to increase or decrease product quantity by finding the product by ID and updating its quantity in the cart state.
- The decrease quantity button is disabled when the quantity is 1 to prevent reducing the quantity below one.
- These functions are passed through **context** to the cart component, enabling dynamic interaction with the cart UI.

## Finishing dynamic cart page

- The cart page is made fully dynamic by using the `useProductContext` hook to manage cart items, including removing products and updating quantities.
- Quantity increment buttons are disabled when the selected quantity reaches the available stock for a specific product size, ensuring users cannot exceed stock limits.
- Size options with zero stock are filtered out from both the cart and product components to improve user experience.
- The cart summary dynamically renders product names and calculates the final amount (selling price × quantity) with two decimal places.
- The total cart amount is calculated using the `Array.reduce` method, summing all product totals and updating dynamically with quantity changes.

## Project
