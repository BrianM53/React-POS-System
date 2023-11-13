import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderNowSettings.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

const OrderNowSettings = () => {
  useEffect(() => {
    const updateValue = (element, valueElement) => {
      valueElement.textContent = element.value;
      localStorage.setItem(element.id, element.value);
    };

    const displayContrast = document.querySelector('#display-contrast');
    const fontSize = document.querySelector('#font-size');
    const mouseSensitivity = document.querySelector('#mouse-sensitivity');

    displayContrast.addEventListener('input', () => {
      updateValue(displayContrast, document.getElementById('display-contrast-value'));
    });

    fontSize.addEventListener('input', () => {
      updateValue(fontSize, document.getElementById('font-size-value'));
    });

    mouseSensitivity.addEventListener('input', () => {
      updateValue(mouseSensitivity, document.getElementById('mouse-sensitivity-value'));
    });

    if (localStorage.getItem('display-contrast')) {
      displayContrast.value = localStorage.getItem('display-contrast');
      updateValue(displayContrast, document.getElementById('display-contrast-value'));
    }

    if (localStorage.getItem('font-size')) {
      fontSize.value = localStorage.getItem('font-size');
      updateValue(fontSize, document.getElementById('font-size-value'));
    }

    if (localStorage.getItem('mouse-sensitivity')) {
      mouseSensitivity.value = localStorage.getItem('mouse-sensitivity');
      updateValue(mouseSensitivity, document.getElementById('mouse-sensitivity-value'));
    }
  }, []);

  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <Link to="/order-now">
          <FontAwesomeIcon icon={['fas', 'arrow-left']} className="fa-2x" />
        </Link>
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
    </div>
  );
};

export default OrderNowSettings;