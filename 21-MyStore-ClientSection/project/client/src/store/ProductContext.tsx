"use client";

import { createContext, useContext, useState } from "react";
import { Product, ProductInCart } from "@/types/product";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

type ProductContextType = {
  cartItems: ProductInCart[];
  addProductToCart: (productInCart: ProductInCart) => void;
  removeProductFromCart: (productId: number) => void;
  setCartItems: (items: ProductInCart[]) => void;
};

const ProductContext = createContext<ProductContextType>({
  cartItems: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  setCartItems: () => {},
});

export const ProductProvider = ({ children }: ProductContextProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductInCart[]>([]);

  const addProductToCart = (productInCart: ProductInCart) => {
    setCartItems((prevCartItems) => [...prevCartItems, productInCart]);
    console.log(cartItems);
  };

  const removeProductFromCart = (productId: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId),
    );
    console.log(cartItems);
  };

  return (
    <ProductContext.Provider
      value={{
        cartItems,
        addProductToCart,
        removeProductFromCart,
        setCartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
