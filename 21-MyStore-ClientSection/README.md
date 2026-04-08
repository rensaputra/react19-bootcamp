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
