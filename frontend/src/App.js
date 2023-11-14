import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import SpecialFontText from "./components/specialFontText/SpecialFontText";

import PopularItems from './popularItems';
import Header from './components/utility/header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import MainContent from './mainContent';
import RainCheck from './rainCheck';
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

      <Header />

      <main className="menu-main-app">

        <MainContent />

        <RainCheck />

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
