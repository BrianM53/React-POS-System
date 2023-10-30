import './AboutUs.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 


const AboutUs = () => {
  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <Link to="/settings">
          <FontAwesomeIcon icon={['fas', 'gear']} className="fa-2x" id="menu-nav-settings-icon" />
        </Link>
        <Link to="/app">
          <FontAwesomeIcon icon={['fas', 'home']} className="fa-2x" id="menu-nav-home-icon" />
        </Link>
        <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
        <div className="menu-nav-container">
          <Link to="/ordernow">
            <button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button>
          </Link>
          <Link to="/menu">
            <button className="menu-nav-container-button" id="menu-nav-container-button-menu">Menu</button>
          </Link>
          <Link to="/aboutus">
            <button className="menu-nav-container-button" id="menu-nav-container-button-aboutus">About Us</button>
          </Link>
          <Link to="/contactus">
            <button className="menu-nav-container-button" id="menu-nav-container-button-contactus">Contact Us</button>
          </Link>
        </div>
        <Link to="/login">
          <button className="menu-nav-admin-login">Admin Login</button>
        </Link>
      </nav>
      <main class="menu-main-aboutus">
        <div class="menu-main-aboutus-header">
            About Us
        </div>
        <div class="menu-main-aboutus-container">
            <div class="menu-main-aboutus-entry" id="menu-main-aboutus-entry-1">
                Sweet Paris was first opened in Rice Village in 2012. Within 10 years, Sweet Paris has turned into one of the best fast casual hotspots in various parts of Hosuton, Austin, San Antonio, College Station, Miami, Woodbury and international resort destinations.
                <br /> 
                Every day - and every bite - is an opportunity to savor all that's good in the world. Although crepes are known for being French, we have introduced hints of other cultures into this versatile dish that can be enjoyed any time of the day!
                <br /> 
                Now, after reading that last paragraphp, you're probably pretty hungry. How can you get a taste of this celebrated cuisine? If you know what to order, click on either the Order Now! button on the home page, or click on the Order Now! button in the Menu after surveying the menu for a bit. Your choice! 
            </div>
        </div>
      </main>
      <footer class="menu-footer">
        <div class="menu-footer-message">
          Get in touch with us! Follow us on:
        </div>
        <div className="menu-footer-container">
          <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x" id="menu-footer-instagram" />
          <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x" id="menu-footer-twitter" />
          <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x" id="menu-footer-facebook" />
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x" id="menu-footer-tiktok" />
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;