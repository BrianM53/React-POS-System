import React from 'react';
import NavOptions from './components/utility/navOptions';
import './App.css'
import SpecialFontText from "./components/specialFontText/SpecialFontText";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

const App = () => {
  return (
    <div className="menu-body">
      <SpecialFontText as="header" className="menu-header" fontSize="5rem">
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
      <main className="menu-main-app">
        <div className="menu-main-app-square">

          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Popular Picks
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Can't decide on what to order? Here's some fan favorites!
          </div>
          <div className="menu-main-app-square-container">

            <div className="square-container-item">
              <div className="square-container-item-title">
                Smore's Crepe
              </div>
              <img src="/sweetParisLocation.jpeg" alt="popular pick menu item 1" className="popular-picks-photo"  />
            </div>

            <div className="square-container-item">
              <div className="square-container-item-title">
                Smore's Crepe
              </div>
              <img src="/sweetParisLocation.jpeg" alt="popular pick menu item 1" className="popular-picks-photo"  />
            </div>

            <div className="square-container-item">
              <div className="square-container-item-title">
                Smore's Crepe
              </div>
              <img src="/sweetParisLocation.jpeg" alt="popular pick menu item 1" className="popular-picks-photo"  />
            </div>

          </div>
        </div>

        <div className="menu-main-app-square-no"></div>
        <div className="menu-main-app-square">
          Item 3
        </div>
        <div className="menu-main-app-square-no"></div>
        <div className="menu-main-app-square">
          Item 5
        </div>
        <div className="menu-main-app-square-no"></div>
        <div className="menu-main-app-square">
          Item 7
        </div>
        <div className="menu-main-app-square-no"></div>
        <div className="menu-main-app-square">
          Item 9
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

export default App;