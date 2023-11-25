import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./socials.css"

export default function Footer() {
    return(
        <div>
            <div className="socials-container">
                <div>
                    <a target="_blank" href="https://www.instagram.com/sweetparis/?hl=en">
                        <FontAwesomeIcon
                            icon={['fab', 'instagram']}
                            className="fa-2x"
                            id="menu-footer-instagram"
                        />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://twitter.com/thesweetparis?lang=en">
                        <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="fa-2x"
                            id="menu-footer-twitter"
                        />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.facebook.com/sweetpariscollegestation/">
                        <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className="fa-2x"
                            id="menu-footer-facebook"
                        />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.tiktok.com/@sweetpariscreperie?lang=en">
                        <FontAwesomeIcon
                            icon={['fab', 'tiktok']}
                            className="fa-2x"
                            id="menu-footer-tiktok"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
