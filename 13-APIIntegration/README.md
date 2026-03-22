# Completing the Fullstack Application (API Integration)

- This chapter walks you through the final integration between the UI and the backend services built earlier.
- The finished product is a CRUD app built with:
  - **Frontend**: React 19, TypeScript, Tailwind CSS
  - **Backend**: Node.js, Express.js
  - **Database**: MySQL
- In the next chapter we will develop a full-featured app using Next.js.

## Screenshots

![Products page](/13-APIIntegration/docs/screenshots/Products.png)  
Product page — this page calls the `/products` endpoint to list all available products.

![Product details](/13-APIIntegration/docs/screenshots/ProductDetails.png)  
Product details page — we retrieve a product's information by calling the GET endpoint `/products/:id` with the product's id.

![Add / Edit Product Detail](/13-APIIntegration/docs/screenshots/AddProduct.png)  
The AddEditProducts component handles both adding and editing a product. We determine add vs. edit mode from the route parameter and call the appropriate API endpoint accordingly.

![Delete modal](/13-APIIntegration/docs/screenshots/DeleteModal.png)  
Finally, a confirmation modal asks the user to confirm before calling the DELETE endpoint.

## Project source code

- Backend [source code](project/backend)
- Frontend [source code](project/frontend)
