import React from "react";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { Routes, Route, Link, useRoutes } from "react-router";
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
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
          children: [
            {
              path: ":id",
              element: <ProductDetails />,
            },
          ],
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
