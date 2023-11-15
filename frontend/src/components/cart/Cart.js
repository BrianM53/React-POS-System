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
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <div className="order-now-nav-left">
          <Link to="/order-now">
            <FontAwesomeIcon icon={["fas", "arrow-left"]} className="fa-2x" />
          </Link>
          <Link to="/ordernowsettings">
            <FontAwesomeIcon
              icon={["fas", "gear"]}
              className="fa-2x"
              id="menu-nav-settings-icon"
            />
          </Link>
        </div>
      </nav>
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
      <footer className="menu-footer">
        <div className="menu-footer-message">
          Get in touch with us! Follow us on:
        </div>
        <div className="menu-footer-container">
          <i
            className="fa-brands fa-square-instagram fa-2xl menu-footer-smlink"
            id="menu-footer-instagram"
          ></i>
          <i
            className="fa-brands fa-twitter fa-2xl menu-footer-smlink"
            id="menu-footer-twitter"
          ></i>
          <i
            className="fa-brands fa-facebook fa-2xl menu-footer-smlink"
            id="menu-footer-facebook"
          ></i>
          <i
            className="fa-brands fa-tiktok fa-2xl menu-footer-smlink"
            id="menu-footer-tiktok"
          ></i>
        </div>
      </footer>
    </div>
  );
};

export default Cart;