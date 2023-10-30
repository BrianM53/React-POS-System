import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

const ContactUs = () => {
  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <Link to="/settings">
          <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
        </Link>
        <Link to="/app">
          <i className="fa-solid fa-home fa-2xl" id="menu-nav-home-icon"></i>
        </Link>
        <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
        <div className="menu-nav-container">
          <Link to="/ordernow">
            <button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button>
          </Link>
          <Link to="/menu">
            <button className="menu-nav-container-button" id="menu-nav-container-button-menu">Menu</button>
          </Link>
          <Link to="/aboutus">
            <button className="menu-nav-container-button" id="menu-nav-container-button-aboutus">About Us</button>
          </Link>
          <Link to="/contactus">
            <button className="menu-nav-container-button" id="menu-nav-container-button-contactus">Contact Us</button>
          </Link>
        </div>
        <Link to="/login">
        <button className="menu-nav-admin-login">Admin Login</button>
        </Link>
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
          <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x" id="menu-footer-instagram" />
          <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x" id="menu-footer-twitter" />
          <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x" id="menu-footer-facebook" />
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x" id="menu-footer-tiktok" />
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;