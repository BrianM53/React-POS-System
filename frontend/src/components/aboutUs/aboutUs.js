import React from 'react';
import NavOptions from '../utility/navOptions';
import { Link } from 'react-router-dom';
import './aboutUs.css';
import SpecialFontText from "../specialFontText/SpecialFontText";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

function AboutUs() {
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
        <main className="menu-main-aboutus">

            <SpecialFontText as="div" className="menu-main-aboutus-header" fontSize="3.5rem">
              About Us
            </SpecialFontText>
            <div className="menu-main-aboutus-entry" id="menu-main-aboutus-entry-1">
              <div className="actual-top-container">
                <div className="menu-main-aboutus-top-container">
                  <p>
                    Sweet Paris was first opened in Rice Village in 2012. Within 10 years, Sweet Paris has turned into one of the best fast casual hotspots in various parts of Houston, Austin, San Antonio, College Station, Miami, Woodbury, and international resort destinations. We will continue our promise of crafting the finest crepes and co. to the best of our abilities!
                    Every day - and every bite - is an opportunity to savor all that's good in the world. Although crepes are known for being French, we have introduced hints of other cultures into this versatile dish that can be enjoyed any time of the day!
                  </p>
                </div>
                <img src="/employees.jpeg" alt="Employees standing around outside of restaurant" className="menu-main-aboutus-image" />
              </div>
              <div className="actual-bottom-container">
                 <img src="/employeesGiveBack.jpeg" alt="Employees presenting donation check" className="menu-main-aboutus-image"/>
                <div className="menu-main-aboutus-bottom-container">
                  <p>
                    We've donated over 11,000 additional meals recently to the Houston Food Bank through our "Eat Here, Feed There" program, totaling over 359,000 meals since it started the program in 2018. For each crepe sold with the food bank logo on the menu, we brand donates a meal to fight hunger.
                    From the initial conception of Sweet Paris, we were inspired by fellow entrepreneurs who built social causes into their successful businesses. We decided to help fight hunger with hunger by donating a meal every time the Allison's Parfait, Truffled Caprese, and Lemon Sugar are ordered, targeting programs that support children.
                  </p>
                </div>
              </div>
          </div>
        </main>
        <footer className="menu-footer">
          <SpecialFontText as="div" className="menu-footer-message">
            Get in touch with us! Follow us on:
          </SpecialFontText>
          <div className="menu-footer-container">
            <Link to="/contact-us">
              <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-instagram" />
            </Link>
            <Link to="/contact-us">
              <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-twitter" />
            </Link>
            <Link to="/contact-us">
              <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-facebook" />
            </Link>
            <Link to="/contact-us">
              <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-tiktok" />
            </Link>
          </div>
        </footer>
      </div>
  );
};

export default AboutUs;
