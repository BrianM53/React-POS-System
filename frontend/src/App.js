import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import SpecialFontText from "./components/specialFontText/SpecialFontText";

import NavOptions from './components/utility/navOptions';
import Weather from './components/weather/Weather';
import PopularItems from './popularItems';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

const App = () => {
  useEffect(() => {
    document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=0.5");
  }, []);

  const [email, setEmail] = useState('');

  const clearInput = () => {
    setEmail('');
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollAmount = direction === 'right' ? 200 : -200;
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft);
    }
  };

  const [scrollPosition2, setScrollPosition2] = useState(0);
  const scrollContainerRef2 = useRef(null);

  const handleScroll2 = (direction) => {
    const container = scrollContainerRef2.current;

    if (container) {
      const scrollAmount = direction === 'right' ? 200 : -200;
      container.scrollLeft += scrollAmount;
      setScrollPosition2(container.scrollLeft);
    }
  };

  return (
    <div className="menu-body">
      <nav className="menu-nav">
        <Link to="/settings">
          <FontAwesomeIcon
            icon={["fas", "gear"]}
            className="fa-2x"
            id="menu-nav-settings-icon"
          />
        </Link>
        <Link to="/app">
          <FontAwesomeIcon
            icon={["fas", "home"]}
            className="fa-2x"
            id="menu-nav-home-icon"
          />
        </Link>
        <SpecialFontText as="div" className="menu-nav-title">
          Sweet Paris: Crepes and Cafe
        </SpecialFontText>
        <NavOptions />
      </nav>
      <main className="menu-main-app">


        <div className="menu-main-app-square-3">
          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Rain Check
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Planning on sitting outside today? Double check the weather!
          </div>

          < Weather />

        </div>

        <div className="menu-main-app-square-5">
          <div className="square-5-top">
            <SpecialFontText as="div" className="square-5-title" fontSize="5.4rem">
              Let Them Eat Crepes
            </SpecialFontText>
            <div className="square-5-description">
              Ready to order?
            </div>

            <Link to="/order-now">
              <button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button>
            </Link>
            <img src="/sweetParisLocation.jpeg" alt="restaurant front" className="square-5-photo"/>
          </div>
        </div>

        <PopularItems />
        
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
