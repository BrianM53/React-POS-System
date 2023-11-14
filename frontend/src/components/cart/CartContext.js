import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // convert product price from string to int
    setCartItems((prevItems) => {
      // increment quantity if item exists
      const existingItem = prevItems.find(
        (item) => item.product_id === product.product_id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // else add the item to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.product_id === productId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
