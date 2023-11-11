import React from 'react';
import NavOptions from '../utility/navOptions';
import { Link } from 'react-router-dom';
import './contactUs.css';
import SpecialFontText from "../specialFontText/SpecialFontText";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

const ContactUs = () => {
  return (
    <div className="menu-body">
      <SpecialFontText as="header" className="menu-header" >
          Welcome to the Sweet Paris Cafe!
      </SpecialFontText>
      <nav className="menu-nav">
        <Link to="/settings">
            <FontAwesomeIcon icon={['fas', 'gear']} className="fa-2x" id="menu-nav-settings-icon" />
        </Link>
        <Link to="/app">
            <FontAwesomeIcon icon={['fas', 'home']} className="fa-2x" id="menu-nav-home-icon" />
        </Link>
        <SpecialFontText as="div" className="menu-nav-title">
          Sweet Paris: Crepes and Cafe
        </SpecialFontText>
        <NavOptions />
      </nav>
      <main className="menu-main-contactus">

        <SpecialFontText as="div" className="menu-main-contactus-header" fontSize="3.5rem">
          Contact Us
        </SpecialFontText>
        <div className="menu-main-contactus-container">
          <div className="menu-main-contactus-entry" id="menu-main-contactus-entry-1">
            Love the restaurant?
            <br />
            Feel free to shout us out on social media!
            <br />
            Instagram: @SweetParisCrepery
            <br />
            Twitter: @SweetParisCollegeStation
            <br />
            Facebook: SweetParisCrepery - College Station
            <br />
            TikTok: sweet_paris_college_station
          </div>
        </div>
      </main>
      <footer className="menu-footer">
        <div className="menu-footer-message">
          Get in touch with us! Follow us on:
        </div>
        <div className="menu-footer-container">
          <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-instagram" />
          <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-twitter" />
          <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-facebook" />
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-tiktok" />
         </div>
      </footer>
    </div>
  );
};

export default ContactUs;