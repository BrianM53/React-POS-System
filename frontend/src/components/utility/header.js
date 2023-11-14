import React from 'react';
import { Link } from 'react-router-dom';

import './navOptions.css';
// import SpecialFontText from './components/specialFontText/SpecialFontText';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import NavOptions from './navOptions';
library.add(fas,fab); 

function Header() {
    return (
        <nav className="menu-nav">
        <Link to="/settings">
            <FontAwesomeIcon
            icon={["fas", "gear"]}
            className="fa-2x"
            id="menu-nav-settings-icon"
            />
        </Link>
        <Link to="/app">
            <FontAwesomeIcon
            icon={["fas", "home"]}
            className="fa-2x"
            id="menu-nav-home-icon"
            />
        </Link>
        {/* <SpecialFontText as="div" className="menu-nav-title"> */}
            Sweet Paris: Crepes and Cafe
        {/* </SpecialFontText> */}
        <NavOptions />
        </nav>
    );
}

export default Header;