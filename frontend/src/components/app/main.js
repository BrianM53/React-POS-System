import { Link } from 'react-router-dom';
import React from 'react';
import SpecialFontText from "../specialFontText/SpecialFontText";

function MainContent() {
    return (
      <div>
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

        </div>
    </div>

    );
}

export default MainContent;