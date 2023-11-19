import SpecialFontText from "./components/specialFontText/SpecialFontText";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return(
        <div>
            <SpecialFontText as="div" className="menu-footer-message">
            Get in touch with us! Follow us on:
            </SpecialFontText>

            <div className="menu-footer-container">
                <Link to="/contact-us">
                    <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-instagram" />
                </Link>
                <Link to="/contact-us">
                    <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-twitter" />
                </Link>
                <Link to="/contact-us">
                    <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-facebook" />
                </Link>
                <Link to="/contact-us">
                    <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-tiktok" />
                </Link>
            </div>
        </div>
    );
}