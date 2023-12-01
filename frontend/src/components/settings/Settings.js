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
  const [colorStyle, setColorStyle] = useState("low");
  const [fontSize, setFontSize] = useState("normal");

  useEffect(() => {
    // document.body.style.zoom = "80%";

    if (localStorage.getItem("color-style")) {
      setColorStyle(Number(localStorage.getItem("color-style")));
    }

    if (localStorage.getItem("font-size")) {
      setFontSize(Number(localStorage.getItem("font-size")));
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

  const handleColorChange = (e) => {
    setColorStyle(e.target.value);
    updateValue("color-style", e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    updateValue("font-size", e.target.value);
  };

  return (
    <div className="settings-body">
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
          <div className="menu-main-settings-left-container">
            <div
              className="settings-color-container"
            >
              <div>
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
                  <option value="high-contrast">High Contrast</option>
                </select>
              </div>
            </div>
            <div
              className="settings-font-container"
            >
              Font Size:
              <select
                value={fontSize}
                className="font-dropdown"
                onChange={handleFontSizeChange}
              >
                <option value="normal">Normal</option>
                <option value="large">Large</option>
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
