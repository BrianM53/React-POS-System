import { Link } from 'react-router-dom';
import React from 'react';
import SpecialFontText from "./components/specialFontText/SpecialFontText";

function MainContent() {
    return (
        <div className="menu-main-app-square-1">
          <div className="square-1-top">
            <SpecialFontText as="div" className="square-1-title" fontSize="5.4rem">
              Let Them Eat Crepes
            </SpecialFontText>
            <div className="square-1-description">
              Ready to order?
            </div>

            <Link to="/order-now">
              <button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button>
            </Link>
            <img src="/sweetParisLocation.jpeg" alt="restaurant front" className="square-1-photo"/>
          </div>
        </div>
    );
}

export default MainContent;