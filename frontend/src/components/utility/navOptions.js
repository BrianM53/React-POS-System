import React from 'react';
import { Link } from 'react-router-dom';
import './navOptions.css';

const NavOptions = () => {
  return (
    <div className="menu-nav-container">
      <div className="menu-nav-container-left">
        <Link to="/order-now">
          <button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button>
        </Link>
        <Link to="/menu">
          <button className="menu-nav-container-button" id="menu-nav-container-button-menu">Menu</button>
        </Link>
        <Link to="/about-us">
          <button className="menu-nav-container-button" id="menu-nav-container-button-aboutus">About Us</button>
        </Link>
        <Link to="/contact-us">
          <button className="menu-nav-container-button" id="menu-nav-container-button-contactus">Contact Us</button>
        </Link>
      </div>
      <div className="menu-nav-container-right">
        <Link to="/login">
          <button className="menu-nav-admin-login">Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavOptions;
