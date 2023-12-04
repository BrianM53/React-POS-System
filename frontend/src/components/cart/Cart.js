import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(fas, fab);

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="menu-body">
      <main className="main-cart-container">
        <div className="main-cart-header">Your Cart</div>
        <div className="main-cart-order-container">
          {cartItems.length === 0 && <div>Your cart is empty.</div>}
          {cartItems.map((item) => (
            <div className="main-cart-entry" key={item.product_id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <div className="cart-item-title">{item.name}</div>
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
                <div className="cart-item-quantity">
                  Quantity: {item.quantity}
                </div>
                <button onClick={() => removeFromCart(item.product_id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Cart;