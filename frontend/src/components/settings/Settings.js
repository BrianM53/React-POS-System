import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';
import SpecialFontText from "../../fonts/specialFontText/SpecialFontText";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../app/header';
library.add(fas,fab); 

const Settings = () => {
  const [displayContrast, setDisplayContrast] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [mouseSensitivity, setMouseSensitivity] = useState(5);

  useEffect(() => {
    // document.body.style.zoom = "80%";

    if (localStorage.getItem("display-contrast")) {
      setDisplayContrast(Number(localStorage.getItem("display-contrast")));
    }

    if (localStorage.getItem("font-size")) {
      setFontSize(Number(localStorage.getItem("font-size")));
    }

    if (localStorage.getItem("mouse-sensitivity")) {
      setMouseSensitivity(Number(localStorage.getItem("mouse-sensitivity")));
    }

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    }

    const existingScript = document.getElementById("googleTranslateScript");
    if (!existingScript) {
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.type = "text/javascript";
      googleTranslateScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      googleTranslateScript.id = "googleTranslateScript";
      document.body.appendChild(googleTranslateScript);
    }
  }, []);
  const updateValue = (id, value) => {
    localStorage.setItem(id, value);
  };

  const handleDisplayContrastChange = (e) => {
    setDisplayContrast(Number(e.target.value));
    updateValue("display-contrast", e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(Number(e.target.value));
    updateValue("font-size", e.target.value);
  };

  const handleMouseSensitivityChange = (e) => {
    setMouseSensitivity(Number(e.target.value));
    updateValue("mouse-sensitivity", e.target.value);
  };

  return (
    <div className="settings-body">
      <Header />
      
      <main className="menu-main-settings">
        <SpecialFontText
          as="div"
          className="menu-main-settings-header"
          fontSize="3.5rem"
        >
          Accessibility Settings
        </SpecialFontText>

        <div className="menu-main-settings-container">
          <div className="menu-main-settings-left-container">
            <div
              className="menu-main-settings-entry"
              id="menu-main-settings-entry-1"
            >
              Display Contrast:
              <input
                type="range"
                min="0"
                max="100"
                value={displayContrast}
                className="range-slider"
                id="display-contrast"
                onChange={handleDisplayContrastChange}
              />
              <span id="display-contrast-value">{displayContrast}</span>
            </div>
            <div
              className="menu-main-settings-entry"
              id="menu-main-settings-entry-2"
            >
              Font Size:
              <input
                type="range"
                min="10"
                max="50"
                value={fontSize}
                className="range-slider"
                id="font-size"
                onChange={handleFontSizeChange}
              />
              <span id="font-size-value">{fontSize}</span>
            </div>
            <div
              className="menu-main-settings-entry"
              id="menu-main-settings-entry-3"
            >
              Mouse Sensitivity:
              <input
                type="range"
                min="1"
                max="10"
                value={mouseSensitivity}
                className="range-slider"
                id="mouse-sensitivity"
                onChange={handleMouseSensitivityChange}
              />
              <span id="mouse-sensitivity-value">{mouseSensitivity}</span>
            </div>
          </div>

          <div className="menu-main-settings-right-container">
            <div
              className="menu-main-settings-entry"
              id="menu-main-settings-entry-5"
            >
              Google Translate API
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
