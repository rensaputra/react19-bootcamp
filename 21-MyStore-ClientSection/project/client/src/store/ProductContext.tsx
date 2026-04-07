"use client";

import { createContext, useContext } from "react";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

const ProductContext = createContext({
  cart: [],
});

export const ProductProvider = ({ children }: ProductContextProviderProps) => {
  console.log("Product context is working");
  return (
    <ProductContext.Provider value={{ cart: [] }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
