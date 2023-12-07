import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

/**
 * Provides access to the shopping cart functionality.
 * @function useCart
 * @returns {Object} - The cart context and its methods.
 */
export const useCart = () => useContext(CartContext);

/**
 * A context provider for managing the shopping cart state and operations.
 * @function CartProvider
 * @param {Object} props - The React component properties.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {React.ReactNode} - The wrapped child components with access to the shopping cart context.
 */
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  /**
   * Adds a product to the shopping cart.
   * @function addToCart
   * @param {Object} product - The product to be added to the cart.
   */
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

  /**
   * Removes a product from the shopping cart.
   * @function removeFromCart
   * @param {number} productId - The ID of the product to be removed.
   */
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };

  /**
   * Retrieves the total quantity of items in the shopping cart.
   * @function getCartLength
   * @returns {number} - The total quantity of items in the cart.
   */
  const getCartLength = () => {
    // console.log(cartItems.reduce((totalLength, item) => totalLength + item.quantity, 0));
    return cartItems.reduce((totalLength, item) => totalLength + item.quantity, 0);
  };

  /**
   * Decrements the quantity of a product in the shopping cart.
   * @function decrementQuantity
   * @param {number} productId - The ID of the product whose quantity needs to be decremented.
   */
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
        getCartLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};