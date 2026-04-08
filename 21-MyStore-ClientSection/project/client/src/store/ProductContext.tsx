"use client";

import { createContext, useContext, useState } from "react";
import { ProductInCart } from "@/types/product";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

type ProductContextType = {
  cartItems: ProductInCart[];
  addProductToCart: (productInCart: ProductInCart) => void;
  removeProductFromCart: (productId: number) => void;
  setCartItems: (items: ProductInCart[]) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

const ProductContext = createContext<ProductContextType>({
  cartItems: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  setCartItems: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
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

  const increaseQuantity = (productId: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  return (
    <ProductContext.Provider
      value={{
        cartItems,
        addProductToCart,
        removeProductFromCart,
        setCartItems,
        increaseQuantity,
        decreaseQuantity,
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
