import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Settings.css';
import SpecialFontText from "../../fonts/specialFontText/SpecialFontText";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../app/header';

import { useSettings } from './settingsControl';
library.add(fas,fab); 

/**
 * Component for managing user settings.
 * @component
 * @function Settings
 * @returns {JSX.Element} - Rendered component.
 */
const Settings = () => {
  const { colorStyle, setColorStyle, fontSize, setFontSize } = useSettings();
  const scriptLoaded = useRef(false);

  /**
   * Loads the Google Translate script.
   * Initializes the translation element with specified settings.
   * @function loadGoogleTranslateScript
   * @returns {void}
   */
  const loadGoogleTranslateScript = () => {
    if (!scriptLoaded.current) {
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = function () {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          );
        };
      }

      const existingScript = document.getElementById('googleTranslateScript');
      if (existingScript) {
        existingScript.remove(); // Remove existing script to reload it
      }

      const googleTranslateScript = document.createElement('script');
      googleTranslateScript.type = 'text/javascript';
      googleTranslateScript.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      googleTranslateScript.id = 'googleTranslateScript';
      document.body.appendChild(googleTranslateScript);

      scriptLoaded.current = true;
    }
  };

  useEffect(() => {
    loadGoogleTranslateScript(); // Load script on initial mount
  }, []);

  /**
   * Handles color change in the settings.
   * Updates the color style and stores it in local storage.
   * @function handleColorChange
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event.
   * @returns {void}
   */
  const handleColorChange = (e) => {
    setColorStyle(e.target.value);
    localStorage.setItem("color-style", e.target.value);
  };

  /**
   * Handles font size change in the settings.
   * Updates the font size and stores it in local storage.
   * @function handleFontSizeChange
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event.
   * @returns {void}
   */
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    localStorage.setItem("font-size", e.target.value);
  };

  return (
    <div className="settings-body">
      <h1 className='settings-h1'>settings</h1>
      <Header />
      
      <main className="menu-main-settings">
        {/* <SpecialFontText
          as="div"
          className="menu-main-settings-header"
          fontSize="3.5rem"
        >
          Settings
        </SpecialFontText> */}

        <div className="menu-main-settings-container">
          <div
            className="settings-color-container"
          >
            <div className='color-title'>
              Color:   
            </div>
            <div>
              <select
                value={colorStyle}
                onChange={handleColorChange}
                className="color-dropdown"
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="high-contrast">Contrast</option>
              </select>
            </div>
          </div>


          <div className="menu-main-settings-right-container">
            <div
              className="translate-container"
            >
              Select Language
              <div id="google_translate_element"></div>
            </div>
          </div>
        </div>

        <div className="filler-block" />
      </main>
    </div>
  );
};

export default Settings;
