import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Weather from '../weather/Weather';
library.add(fas,fab); 

function Header() {
    const scrollRef = useRef(null);
    const [hasOverflow, setHasOverflow] = useState(false);
    const [activePage, setActivePage] = useState(() => localStorage.getItem('activePage') || '""');

    const handleActivePage = (page) => {
        setActivePage(page);
        localStorage.setItem('activePage', page);
    };

    useEffect(() => {
        const container = scrollRef.current;
        
        if (container) {
            const overflow = container.scrollWidth > container.clientWidth;
            if (overflow) {
                setHasOverflow(true);
            } else {
                setHasOverflow(false);
            }
        }
    }, []);

    return (
        <div 
        ref={scrollRef}
        className={hasOverflow ? 'header-nav' : 'header-nav-noscroll'}>
            <div className='header-nav-left'>
                <ul>
                    <li>
                        <Link to="/settings" onClick={() => handleActivePage('Settings')}>
                        <FontAwesomeIcon
                        icon={["fas", "gear"]}
                        className={activePage === 'Settings' ? 'button-icon-active' : 'button-icon-passive'}
                        id="menu-nav-settings-icon"
                        />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => handleActivePage('Home')}>
                        <FontAwesomeIcon
                        icon={["fas", "home"]}
                        className={activePage === 'Home' ? 'button-icon-active' : 'button-icon-passive'}
                        id="menu-nav-home-icon"
                        />
                        </Link>
                    </li>
                    <li>
                        <div className='weather-icon'>
                            <Weather />
                        </div>
                    </li>
                </ul>
            </div>

            <div className='header-title-container'>
                <h1 className='header-title1'>
                    Sweet Paris
                </h1>
                <h1 className='header-title2'>
                    Crêperie & Café
                </h1>
            </div>

            <div className='header-nav-right'>
                <ul>
                    <li>
                        <Link to="/order-now" onClick={() => handleActivePage('Order Now')}>
                        <a className={activePage === 'Order Now' ? 'button-nav-active' : 'button-nav-passive'}>Order Now</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" onClick={() => handleActivePage('Menu')}>
                        <a className={activePage === 'Menu' ? 'button-nav-active' : 'button-nav-passive'}>Menu</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-us" onClick={() => handleActivePage('About Us')}>
                        <a className={activePage === 'About Us' ? 'button-nav-active' : 'button-nav-passive'}>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us" onClick={() => handleActivePage('Contact Us')}>
                        <a className={activePage === 'Contact Us' ? 'button-nav-active' : 'button-nav-passive'}>Contact Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                        <a className="button-nav-login">Admin Login</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;