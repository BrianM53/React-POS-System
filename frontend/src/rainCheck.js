import React from 'react';
import SpecialFontText from "./components/specialFontText/SpecialFontText";
import Weather from './components/weather/Weather';

function RainCheck() {
    return (
        <div className="menu-main-app-square-2">
          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Rain Check
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Planning on sitting outside today? Double check the weather!
          </div>

          < Weather />

        </div>
    );
}

export default RainCheck;