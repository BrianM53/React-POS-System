import React from 'react';
import NavOptions from '../utility/navOptions';
import { Link } from 'react-router-dom';
import './aboutUs.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

function AboutUs() {
    return (
      <div className="menu-body">
        <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
        <nav className="menu-nav">
          <Link to="/settings">
              <FontAwesomeIcon icon={['fas', 'gear']} className="fa-2x" id="menu-nav-settings-icon" />
          </Link>
          <Link to="/app">
              <FontAwesomeIcon icon={['fas', 'home']} className="fa-2x" id="menu-nav-home-icon" />
          </Link>
          <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
          <NavOptions />
        </nav>
        <main className="menu-main-aboutus">
          <div className="menu-main-aboutus-header">
            About Us
          </div>
          <div className="menu-main-aboutus-container">
            <div className="menu-main-aboutus-entry" id="menu-main-aboutus-entry-1">
              <p>
                Sweet Paris was first opened in Rice Village in 2012. Within 10 years, Sweet Paris has turned into one of the best fast casual hotspots in various parts of Houston, Austin, San Antonio, College Station, Miami, Woodbury, and international resort destinations.
              </p>
              <p>
                Every day - and every bite - is an opportunity to savor all that's good in the world. Although crepes are known for being French, we have introduced hints of other cultures into this versatile dish that can be enjoyed any time of the day!
              </p>
              <p>
                Now, after reading that last paragraph, you're probably pretty hungry. How can you get a taste of this celebrated cuisine? If you know what to order, click on either the Order Now! button on the home page, or click on the Order Now! button in the Menu after surveying the menu for a bit. Your choice!
              </p>
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

export default AboutUs;
