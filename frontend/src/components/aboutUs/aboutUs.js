import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <Link to="/settings">
          <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
        </Link>
        <Link to="/app">
          <i className="fa-solid fa-home fa-2xl" id="menu-nav-home-icon"></i>
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
          <Link to="/login">
            <button className="menu-nav-admin-login">Admin Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default AboutUs;