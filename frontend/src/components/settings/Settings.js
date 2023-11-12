import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';
import NavOptions from '../utility/navOptions';
import SpecialFontText from "../specialFontText/SpecialFontText";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

const Settings = () => 
{
  const [displayContrast, setDisplayContrast] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [mouseSensitivity, setMouseSensitivity] = useState(5);

  useEffect(() => {
    if (localStorage.getItem('display-contrast')) 
    {
      setDisplayContrast(Number(localStorage.getItem('display-contrast')));
    }

    if (localStorage.getItem('font-size')) 
    {
      setFontSize(Number(localStorage.getItem('font-size')));
    }

    if (localStorage.getItem('mouse-sensitivity')) 
    {
      setMouseSensitivity(Number(localStorage.getItem('mouse-sensitivity')));
    }
    }, []);
    const updateValue = (id, value) => 
    {
      localStorage.setItem(id, value);
    };

    const handleDisplayContrastChange = (e) => 
    {
      setDisplayContrast(Number(e.target.value));
      updateValue('display-contrast', e.target.value);
    };

    const handleFontSizeChange = (e) => 
    {
      setFontSize(Number(e.target.value));
      updateValue('font-size', e.target.value);
    };

    const handleMouseSensitivityChange = (e) => 
    {
      setMouseSensitivity(Number(e.target.value));
      updateValue('mouse-sensitivity', e.target.value);
    };
  
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
      <main className="menu-main-settings">
        <SpecialFontText as="div" className="menu-main-settings-header" fontSize="3.5rem">
          Accessibility Settings
        </SpecialFontText>

        <div className="menu-main-settings-container">

          <div className="menu-main-settings-left-container">

            <div className="menu-main-settings-entry" id="menu-main-settings-entry-1">
              Display Contrast:
              <input type="range" min="0" max="100" value={displayContrast} className="range-slider" id="display-contrast" onChange={handleDisplayContrastChange} />
              <span id="display-contrast-value">{displayContrast}</span>
            </div>
            <div className="menu-main-settings-entry" id="menu-main-settings-entry-2">
              Font Size:
              <input type="range" min="10" max="50" value={fontSize} className="range-slider" id="font-size" onChange={handleFontSizeChange} />
              <span id="font-size-value">{fontSize}</span>
            </div>
            <div className="menu-main-settings-entry" id="menu-main-settings-entry-3">
              Mouse Sensitivity:
              <input type="range" min="1" max="10" value={mouseSensitivity} className="range-slider" id="mouse-sensitivity" onChange={handleMouseSensitivityChange} />
              <span id="mouse-sensitivity-value">{mouseSensitivity}</span>
            </div>

          </div>

          <div className="menu-main-settings-right-container">

            <div className="menu-main-settings-entry" id="menu-main-settings-entry-4">
              I'll design all of this later once I get an idea of what toggling the API looks like in the webpage
            </div>
            <div className="menu-main-settings-entry" id="menu-main-settings-entry-5">
              Google Translate API
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

export default Settings;