import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  
  /*work on this js, ordernow.js should cover it I think but 
  maybe not*/
  
  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <div className="order-now-nav-left">
          <Link to="/ordernow">
            <i className="fa-solid fa-arrow-left fa-2xl"></i>
          </Link>
          <Link to="/ordernowsettings">
            <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
          </Link>
        </div>
      </nav>
      <main className="main-cart-container">
        <div className="main-cart-header">
          Your Cart
        </div>
        <div className="main-cart-order-container">
          {/* 
            <div className="main-cart-entry" id="main-cart-entry-1">
                asdf
            </div> 
          */}
        </div>
      </main>
      <footer className="menu-footer">
        <div className="menu-footer-message">
          Get in touch with us! Follow us on:
        </div>
        <div className="menu-footer-container">
          <i className="fa-brands fa-square-instagram fa-2xl menu-footer-smlink" id="menu-footer-instagram"></i>
          <i className="fa-brands fa-twitter fa-2xl menu-footer-smlink" id="menu-footer-twitter"></i>
          <i className="fa-brands fa-facebook fa-2xl menu-footer-smlink" id="menu-footer-facebook"></i>
          <i className="fa-brands fa-tiktok fa-2xl menu-footer-smlink" id="menu-footer-tiktok"></i>
        </div>
      </footer>
    </div>
  );
};

export default Cart;