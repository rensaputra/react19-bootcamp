# 20. MyStore: Admin Section

## Introduction

- Developing both admin and client sections, including dashboards, user/product management, and shopping features.
- Using **SQLite** with **Prisma ORM** for efficient data handling and **Tailwind CSS** for modern UI/UX design.
- Implementing secure authentication with **Jose**, **JWT**, and **bcrypt.js**, plus integrating **Stripe** for payment processing.
- Applying **CI/CD** practices with **Vercel** deployment and using Recharts for graphical data presentation.

## Project creation

- Creating two separate Next.js applications: one for the admin section and one for the client section.
- Configuring each project with JavaScript, Tailwind CSS for styling, and enabling the app-router.
- Running the development server to verify the setup.
- Customizing the admin app by updating meta information and clearing default styles to prepare for development.

## Creating sidebar component

- Creating a reusable sidebar component inside a dedicated folder and exporting it for use.

  ```
  Folders wrapped in parentheses don't create URL segments—they're purely organizational. This pattern is typically used to:

  Group related routes — Organize routes that share the same layout without affecting the URL structure
  Apply shared layouts — All routes inside (withLayout) use the layout.tsx file in that folder
  Keep URLs clean — The parentheses disappear from the actual route paths
  Example structure:

  app/
    (withLayout)/
      layout.tsx          ← Applied to routes below
      dashboard/page.tsx  → URL: /dashboard
      settings/page.tsx   → URL: /settings
    login/page.tsx        → URL: /login (no layout)
  ```

- Organizing routes with a folder group and layout.js to apply the sidebar only to specific pages, avoiding it on pages like login.
- Using Tailwind CSS grid classes to style the layout, placing the sidebar and main content side by side with appropriate spacing and borders.

## Working on sidebar

- Replace repeated list items with an array mapped to JSX elements for better code management.
- Use React Router's Link component to enable single-page routing in the sidebar menu.
- Add a user avatar and name section to personalize the sidebar, preparing for dynamic data later.

## Combining utility classes with @apply

- Tailwind classes cannot override custom CSS styles unless those styles are included within Tailwind's component layer.
- The `@apply` directive lets you apply Tailwind utility classes inside your custom CSS classes for cleaner and reusable styling.

## Adding icons to the sidebar

- Use `heroicons.com` to get optimized JSX icons that improve performance compared to full icon libraries.
- Create separate React components for each icon and import them as needed for clean, reusable code.
- Assign icons to sidebar menu items and use Tailwind CSS classes like `flex` and mx-2 to align icons neatly with text.

## Creating 'Users' page

- Created a new users route and page component
- The page includes a title and an "Add Users" button, which is styled using Tailwind CSS classes and wrapped in a Link component for navigation to the add user form.
- Styling techniques include using flexbox (flex justify-between) to align the title and button, and custom Tailwind classes for button appearance and hover effects.
- The user table is wrapped in a container with controlled width and vertical overflow (overflow-y-auto) to handle content size, and table headers are styled with borders and padding for clarity.

## Creating 'Add Users' from

- Build a form with multiple input fields including username, user type (as a dropdown), password, and confirm password, styled using Tailwind CSS with custom classes.
- The form inputs and buttons are styled for usability and visual consistency, including focus, hover, and disabled states.
- To improve code quality and reusability, we refactor the code to component-based architecture for labels, inputs, and buttons instead of duplicating code.

## Implementing component-based architecture

- Creating reusable components for labels, inputs, and buttons helps avoid repetitive code and makes your React project more maintainable.
- Props like `className`, `required`, and `children` allow these components to be dynamic and customizable.
- Conditional rendering is used to display elements like the required asterisk only when needed.
- Using utilities like Tailwind Merge and CLSX ensures proper merging of Tailwind CSS classes, preventing styling issues.

## Creating button & input components

- Creating reusable button and input components helps avoid repetitive code and makes your React project more maintainable.
- These components accept dynamic props like `className`, `onClick`, `children`, and other attributes, making them flexible and customizable.
- Using utilities like `clsx` and Tailwind Merge ensures proper merging of Tailwind CSS classes, preventing styling conflicts.
- Replacing raw HTML tags with these components in your pages promotes a clean, component-based architecture essential for scalable ecommerce solutions with React and Tailwind CSS.

## Refactoring code structure

- Keeping route files clean by moving JSX code into separate screen components improves code organization.
- Creating a dedicated `screens` folder to hold UI page components helps maintain a clear project structure.
- Integrating these screen components back into the route files keeps the routes simple and focused.

## Database creation

- Prisma is installed and configured to use SQLite as the database for the project.
- A model for admin users is defined in the Prisma schema with fields like id (auto-incremented), user type, username (unique), and password.
- After updating the schema, the migration command (`npx prisma migrate dev`) is run to sync the database structure.
- Important setup steps include running `npm install` and `npx prisma generate` to ensure the database and Prisma client are properly configured.

## Addiung users with server action

- Create a server action to insert new user records into the admin users database table using Prisma client.
- Form data is collected and structured into an object for easier validation and database insertion.
- After successfully adding a user, the app revalidates the users page and redirects to it.
- The video highlights the need to hash passwords before storing them

## Implementing hashing

- Passwords should never be stored directly; instead, they must be securely hashed before saving to the database.
- The `bcrypt` library is used for hashing, which involves generating a random "salt" string to make the hash more secure and unpredictable.
- The salt is generated with a balance between security and performance (5 rounds is ideal), then combined with the password to create a hashed password.
- The hashed password replaces the plain password in the database, ensuring user credentials are protected.
- To verify a password, the system hashes the entered password with the stored salt and compares it to the stored hash; a match authenticates the user.

## Validating user creation

- Before adding a new user, the system checks if the username already exists using a database query to prevent duplicates.
- If a duplicate user is found, the app redirects back to the add user page with an error message passed via **search parameters**.
- The add user page receives and displays this error message clearly to inform the user, with styled components for better UX.

## Rendering users in the table

- Created a server action to fetch user data from the database and render it dynamically in a table using React's map() function.
- Icons for edit and delete actions are added as separate React components using optimized JSX from heroicons.com for better performance and cleaner code.
- Tailwind CSS is used extensively to style the table, buttons, and icons, including flexbox for layout, padding, borders, and colors to create a polished and user-friendly admin interface.

## Creating edit user page

- The edit user functionality starts by creating a `dynamic route` with a **user ID** parameter to identify which user to edit.
- Separate page components are created for the edit route, rendering the user ID from the parameters to confirm correct routing.
- The edit user form interface is built by reusing the add user form layout, preparing for pre-filling input fields with existing user data.
- The next step involves fetching the selected user's details to populate the form, enabling effective editing.

## Dynamic default values for edit

- A server action is created to fetch a specific user's data from the database using their user ID.
- This fetched data is then used to dynamically set default values in the edit form's input fields, such as username and user type.
- Password fields are handled carefully by renaming to "reset password" and making them optional, so the existing password remains unless changed.

```
<input type="text" defaultValue={userData.username} />
```

## Updating user data

- You create a server action to update user data, including conditionally hashing the password only if it has been changed.
- The update uses database methods with proper type conversion (e.g., parsing user ID to integer) and updates fields like username and user type.
- The form integrates this server action, requiring the component to be a client component to handle argument passing correctly.
- After updating, the app revalidates and redirects to the users list page to reflect changes.

## Deleting user

- Create a server action to delete a user by their ID from the database and revalidate the users page to update the list.
- To handle the delete action correctly, you implement an asynchronous handler function in a client component using the `use client` directive.
- Async components cannot be used with `use client`, so the page component is made asynchronous to fetch user data and pass it as props.
- The current delete flow works but lacks a confirmation step before deletion; a confirmation modal will be added next to improve user experience.

## Creating delete confirmation popup

- Create a delete confirmation modal component with JSX, including a backdrop and a centered popup card using Tailwind CSS for styling.
- The modal uses fixed positioning and flexbox to overlay and center the popup on the screen, ensuring it appears above other content.
- A close button with an 'X' icon from heroicons.com is added, styled with Tailwind classes for positioning and hover effects.

## Enabling confirmation popup

- Build a delete confirmation popup component using JSX and style it with Tailwind CSS, including a backdrop and centered popup card.
- The popup is triggered by state in the parent component and can be closed by clicking the cancel button, close icon, or outside the popup area.
- Using heroicons.com for the close icon and applying flexbox and fixed positioning ensures a user-friendly and visually clear confirmation dialog.

## Deleting user by confirmation popup

- The delete user action is triggered through a confirmation popup, which is controlled by pssing the delete handler function as a prop.
- Popup visibility is managed with React state, and the selected user ID is stored in state wen the delete icon is clicked to ensure the correct user is deleted.
- After deletion, the popup closes and the selected user ID state is reset, providing a smooth and safe user experience.

## Creating product type page

- Create a product type module with dedicated folder and page components to manage product types in your ecommerce admin interface.
- The user interface for product types is built by reusing and adapting the existing user management table component, including dynamic rendering of product type data.
- State management with React's useState hook is used to control the visibility of the delete confirmation modal and track the selected product type for deletion.
- Proper imports and component structuring ensure clean, maintainable code, while UI elements like titles, links, and table headers are updated to reflect product type management.

## Creating add product type page

- Create a dedicated add product type page component by reusing the UI structure from the add user form, adapting it for product type input.
- Search parameters are used to handle and display error messages dynamically in the form.
- Tailwind CSS layout adjustments, like adding an empty grid item, help improve the form's visual structure and button placement.

## Adding product types and product models into the schema

- You define Prisma models for ProductType and Product with fields like id, name, price, stock, and timestamps.
- A one-to-many relationship is established where each product is linked to a product type via a foreign key.
- In Prisma, this relationship is defined using the relation directive with two parameters: 'fields' (the foreign key in the child table) and 'references' (the primary key in the parent table).
- Default values and optional fields (like rating) are set to ensure data consistency.
- After updating the schema, you `run npx prisma migrate dev` to generate and sync the database tables.

## Adding product type using server action

- You create a server action that handles form submission to insert new product types into the database using Prisma.
- The action first collects form data, then checks if the product type already exists to prevent duplicates.
- If a duplicate is found, the app redirects back to the add product type page with an error message.
- If the product type is new, it is added to the database, the relevant pages are revalidated, and the user is redirected to the product type listing.

## Rendering product types into the table

- You create a server action using the `db.findMany` method to fetch product types from the database asynchronously.
- The fetched product types data is passed as props to a React component, which is made asynchronous to await the server action.
- The component then renders the product types dynamically, replacing any dummy data with real data from the server.

## Creating edit product type page

- You create an edit page for product types by organizing folders and files in your React/Next.js project, following a clear structure.
- The UI is efficiently reused from the add product type page, promoting component reuse and consistency.
- Error messages are handled dynamically by passing search parameters as props to the edit component, enhancing user feedback.

## Dynamic default values for product type

- A server action is created to fetch a unique product type from the database using its ID, with proper parsing of the ID to ensure correct querying.
- The React component is made asynchronous to await this data fetching and then passes the fetched product type data as props to the edit form component.
- The edit form uses the `defaultValue` attribute in input fields to pre-fill them with the existing product type data, enabling a dynamic and user-friendly editing experience.

## Updating product type with server action

- The update product type functionality involves creating a server action that receives form data and the product type ID, updates the database, and then triggers page revalidation and redirection.
- When passing arguments in server actions that return functions, the component must be a client component; adding the `'use client'` directive at the top resolves related errors.
- This process integrates backend updates smoothly with the frontend edit form, enabling dynamic updates of product types in your ecommerce app.

## Deleting product type with server action

- The delete product type functionality is implemented by creating an asynchronous server action that deletes the product type from the database using the db.delete method.
- After deletion, the page is revalidated to reflect the changes dynamically.
- The frontend integrates this server action by making the delete handler asynchronous, calling the delete action with the selected ID, and updating the UI state to close the confirmation modal and reset the selection.

## Creating products page

- The video shows how to create a products page and component structure in the app using React and Next.js.
- It demonstrates reusing and adapting code from a similar users component to manage product data, including state management and delete confirmation modal.
- The table headers are set up to display important product details like name, product type, prices, stock, and status, preparing for dynamic rendering of product data.

## Creating product interface for listing

- It demonstrates how to use Next.js's Image component to display product images dynamically with responsive sizing.
- The video shows how to arrange product name and description next to the image using CSS grid and flexbox for a clean layout.
- It covers truncating long product descriptions for better UI and adding other product details like type, price, stock, and status in a table.
- Finally, it integrates action buttons with proper styling and state management to enable interactive product rows.

## Creating add product page

- The video demonstrates creating an 'Add Product' page component by reusing and adapting code from a similar 'Add User' component, which promotes efficient UI development.
- It shows how to pass search parameters as props to handle and display error messages dynamically within the form.
- The form fields are customized for product details, including renaming labels and placeholders to fit the product context, preparing the form for user input in the ecommerce app.

## Completing add product form

- The video shows how to extend the add product form by adding fields for MRP, selling price, image upload, stock quantities for small, medium, and large sizes, product status, and product description.
- It demonstrates using different input types like number, file, checkbox, and textarea to capture various product details.
- The video highlights the need to improve the product status checkbox UI by planning to replace it with a custom switch component for better user experience.

## Creating switch component

- The video demonstrates how to create a custom switch component in React by adapting a checkbox, including building the track and thumb elements with Tailwind CSS.
- It shows how to use the peer class to link input state with styling of sibling elements for toggle effects.
- The toggle functionality is fixed by ensuring the input is not covered by other elements, and the component is made dynamic by passing props like name and className.

## Creating file input component

- It shows how to create a reusable custom file input component in React, including styling the input, button, and text using Tailwind CSS.
- The video demonstrates adding an upload icon inside the button and managing the selected file name dynamically with React state.
- It addresses a common React issue by adding the `'use client'` directive to enable hooks in client components, ensuring proper functionality.

## Rendering dynamic product types data in product page

- The video demonstrates how to fetch dynamic product types using a server action and pass them as props to a React component.
- It shows making the component asynchronous and safely mapping over the product types array to render options dynamically in a select field.
- This approach helps avoid errors by checking if the data exists before mapping and enables dynamic rendering of product types in your ecommerce app.

## Creating server action for adding products

- It shows how to create a server action that inserts product data into the database by gathering form data into an object.
- The video emphasizes validating the product type exists in the database before adding the product, with error handling through redirection and messages.
- It highlights that images should not be stored directly in the database; instead, images are stored on the server, and their file paths are saved as URLs in the product records.

## Implementing image storate functionality

- It shows how to handle image uploads by reading the file from form data, converting it to a buffer, and preparing it for storage.
- The video explains checking if an 'uploads' directory exists in the server's public folder and creating it if necessary.
- It demonstrates generating a unique filename using a timestamp and saving the image file asynchronously to the server.
- Finally, it highlights storing the image path (URL) in the product data instead of the image itself in the database.

## Completing add product functionality

- It shows how to convert string inputs like sizes and prices into numbers before storing themin the database to ensure correct data types.
- The image path is stored in the database rather than the image itself, with images saved onthe server, which is a common best practice.
- The video demonstrates using Prisma's create method to add a new product record, includinghandling active status and stock quantities.It addresses a UI fix by making the sidebar sticky during scrolling for better user experience.
- After successfully adding a product, the app revalidates the products page and redirects the user to it.

## Rendering dynamic data in products table

- It shows how to create a server action using `db.findMany` to fetch products along with their product types for dynamic data retrieval.
- The page component is made asynchronous to await the server action and pass the fetched products as props to the product component.
- Products are rendered dynamically by mapping over the array, displaying images, names, descriptions, product types, prices, stock, and status with conditional styling.
- A common image path issue is fixed by adding a leading slash to the src attribute, and precautionary styling is applied to images for proper display.

## Creating edit product page

- The video demonstrates creating an edit product page by setting up the folder structure and routing in a Next.js/Remix React app.
- It shows how to make the component asynchronous to fetch product types using server actions and pass them as props.
- The video highlights reusing UI components from the add product page and handling error messages by destructuring search parameters.

## Dynamic default values for product

- It shows how to create a server action to fetch a unique product's data by its ID using database queries.
- The fetched product data is passed as props to the edit product component to pre-fill the form fields.
- Default values are set for various form inputs including text fields, select dropdowns, custom file input, and switch components to display the current product details.

## Render default values in switch and file input

- The video shows how to pass default values to the switch component and render it toggled by default using the "defaultChecked" attribute.
- It explains using the useEffect hook to update the filename state in the custom file input component when the default value changes.
- The filename is extracted from the default file path by splitting the string and selecting the last segment, which is then displayed next to the file input.

## Updating product with server action

- The update product functionality involves creating a server action that handles both data and image updates.
- When a product image is updated, the old image file is deleted from the server using Node.js file system methods, ensuring no orphaned files remain.
- Relative image paths are converted to absolute paths using `process.cwd()` and `path.join()` to accurately locate files on the server.
- The update action replaces the create method with a database update call, integrating smoothly with the edit form as a client component.

```
const path = require('path');

const relativeImagePath = '/images/product.jpg';
const absoluteImagePath = path.join(process.cwd(), 'public', relativeImagePath);

console.log(absoluteImagePath);
```

- The Node.js `process` object is a **global object** that provides control and information about the current running process, including access to environment variables and the ability to exit the process.
- The method `process.cwd()` returns the current working directory path, useful for handling file paths dynamically.
- The `fs.existsSync()` method checks if a file or folder exists synchronously, returning a boolean.
- The `fs.unlinkSync()` method removes a file synchronously, which is useful for deleting files like outdated images in a server environment.

## Deleting product with server action

- The delete product functionality is implemented by creating a server action that deletes the product record from the database.
- The associated product image is also deleted from the server to avoid leftover files.
- After deletion, the products page is revalidated to update the UI dynamically.
- On the client side, the delete action is called asynchronously, and the modal is closed with the selected product state reset to null.

## Project

### Dashboard Screen

![Dashboard page](/20-MyStore-AdminSection/docs/screenshots/Admin-dashboard.png)

### User management screen

![List all users](/20-MyStore-AdminSection/docs/screenshots/Admin-user-list.png)
![Add new user](/20-MyStore-AdminSection/docs/screenshots/Admin-user-add.png)
![Edit existing user](/20-MyStore-AdminSection/docs/screenshots/Admin-user-edit.png)
![Delete user](/20-MyStore-AdminSection/docs/screenshots/Admin-user-delete.png)

### Product type management screen

![List all product types](/20-MyStore-AdminSection/docs/screenshots/Admin-productType-list.png)
![Add new product type](/20-MyStore-AdminSection/docs/screenshots/Admin-productType-add.png)
![Edit existing product type](/20-MyStore-AdminSection/docs/screenshots/Admin-productType-edit.png)
![Delete product type](/20-MyStore-AdminSection/docs/screenshots/Admin-productType-delete.png)

### Product management

![List all products](/20-MyStore-AdminSection/docs/screenshots/Admin-products-list.png)
![Add new product](/20-MyStore-AdminSection/docs/screenshots/Admin-products-add.png)
![Edit existing product](/20-MyStore-AdminSection/docs/screenshots/Admin-products-edit.png)
![Delete product](/20-MyStore-AdminSection/docs/screenshots/Admin-products-delete.png)
