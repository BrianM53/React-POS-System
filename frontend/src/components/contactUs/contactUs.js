import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <Link to="settings.html">
          <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
        </Link>
        <Link to="index.html">
          <i className="fa-solid fa-home fa-2xl" id="menu-nav-home-icon"></i>
        </Link>
        <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
        <div className="menu-nav-container">
          <Link to="ordernow.html">
            <button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button>
          </Link>
          <Link to="menu.html">
            <button className="menu-nav-container-button" id="menu-nav-container-button-menu">Menu</button>
          </Link>
          <Link to="aboutus.html">
            <button className="menu-nav-container-button" id="menu-nav-container-button-aboutus">About Us</button>
          </Link>
          <Link to="contactus.html">
            <button className="menu-nav-container-button" id="menu-nav-container-button-contactus">Contact Us</button>
          </Link>
        </div>
        <button className="menu-nav-admin-login">Admin Login</button>
      </nav>
      <main className="menu-main-contactus">
        <div className="menu-main-contactus-header">
          Contact Us
        </div>
        <div className="menu-main-contactus-container">
          <div className="menu-main-contactus-entry" id="menu-main-contactus-entry-1">
            <p>Love the restaurant?</p>
            <p>Feel free to shout us out on social media!</p>
            <p>Instagram: @SweetParisCrepery</p>
            <p>Twitter: @SweetParisCollegeStation</p>
            <p>Facebook: SweetParisCrepery - College Station</p>
            <p>TikTok: sweet_paris_college_station</p>
          </div>
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

export default ContactUs;