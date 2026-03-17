import React from "react";
import "./App.css";
import Products from "./components/Products";
import About from "./components/About";
import { useRoutes } from "react-router";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import Layout from "./components/Layout";


function App() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "product-details",
          element: <Products />,
        },
        {
          path: "product-details/:id",
          element: <ProductDetails />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <div>
      {routeElements}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
