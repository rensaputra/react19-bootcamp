"use client";

import { createContext, useContext, useState } from "react";
import { ProductInCart } from "@/types/product";
import { User } from "@/types";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

type ProductContextType = {
  cartItems: ProductInCart[];
  customerData: User | null;
  addProductToCart: (productInCart: ProductInCart) => void;
  removeProductFromCart: (productId: number) => void;
  setCartItems: (items: ProductInCart[]) => void;
  setCustomerData: (customerData: User | null) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

const ProductContext = createContext<ProductContextType>({
  cartItems: [],
  customerData: null,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  setCartItems: () => {},
  setCustomerData: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const ProductProvider = ({ children }: ProductContextProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductInCart[]>([]);
  const [customerData, setCustomerData] = useState<User | null>(null);

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
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  return (
    <ProductContext.Provider
      value={{
        cartItems,
        customerData,
        addProductToCart,
        removeProductFromCart,
        setCartItems,
        setCustomerData,
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
