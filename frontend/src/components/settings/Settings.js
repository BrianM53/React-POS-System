import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavOptions from '../utility/navOptions';
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
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <Link to="/settings">
            <FontAwesomeIcon icon={['fas', 'gear']} className="fa-2x" id="menu-nav-settings-icon" />
        </Link>
        <Link to="/app">
            <FontAwesomeIcon icon={['fas', 'home']} className="fa-2x" id="menu-nav-home-icon" />
        </Link>
        <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
        <div className="menu-nav-container">
          <NavOptions />
        </div>
      </nav>
      <main className="menu-main-settings">
        <div className="menu-main-settings-header">
          Accessibility Settings
        </div>
        <div className="menu-main-settings-container">
          <div className="menu-main-settings-entry" id="menu-main-settings-entry-1">
            Display Contrast:
            <input type="range" min="0" max="100" value="50" className="range-slider" id="display-contrast" />
            <span id="display-contrast-value">50</span>
          </div>
          <div className="menu-main-settings-entry" id="menu-main-settings-entry-2">
            Font Size:
            <input type="range" min="10" max="50" value="16" className="range-slider" id="font-size" />
            <span id="font-size-value">16</span>
          </div>
          <div className="menu-main-settings-entry" id="menu-main-settings-entry-3">
            Mouse Sensitivity:
            <input type="range" min="1" max="10" value="5" className="range-slider" id="mouse-sensitivity" />
            <span id="mouse-sensitivity-value">5</span>
          </div>
          <div className="menu-main-settings-entry" id="menu-main-settings-entry-4">
            Google Translate API
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

export default Settings;