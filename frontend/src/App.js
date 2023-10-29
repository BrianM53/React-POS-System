import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import sweetParisLocation from './images/sweetParisLocation.jpeg'; // Import your image

function App() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <a href="settings.html">
          <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
        </a>
        <a href="index.html">
          <i className="fa-solid fa-home fa-2xl" id="menu-nav-home-icon"></i>
        </a>
        <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
        <div className="menu-nav-container">
          <a href="ordernow.html"><button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button></a>
          <a href="menu.html"><button className="menu-nav-container-button" id="menu-nav-container-button-menu">Menu</button></a>
          <a href="aboutus.html"><button className="menu-nav-container-button" id="menu-nav-container-button-aboutus">About Us</button></a>
          <a href="contactus.html"><button className="menu-nav-container-button" id="menu-nav-container-button-contactus">Contact Us</button></a>
        </div>
        <button className="menu-nav-admin-login" onClick={() => handleNavigation('/login')}>Admin Login</button>
      </nav>
      <main className="menu-main">
        <section className="menu-main-section-1">
          <h1 className="menu-main-section-1-h1">Let Them Eat Crepes!</h1>
          <p className="menu-main-section-1-p">
            Welcome to Sweet Paris' customer order interface! Feel free to browse the Menu by clicking the Menu tab, or check out the About Us and Contact Us pages if you're interested. Or, if you're ready to order, click the Order Now! button below to get started! Fresh crepes are just a few clicks away!
            <br /> - <br />
            Once you're in the menu page, go through each product category and click the plus button to add a product from that category to your cart. If you would like to remove them from your cart, you may click on the shopping cart icon from above to edit your order. Then, when you're finished, click on the shopping cart and click on the Pay Now! button and enter your details. Then, you're all set!
          </p>
        </section>
        <aside className="menu-main-aside">
          <img src={sweetParisLocation} alt="Sweet Crepes Logo" className="menu-main-aside-images" />
        </aside>
      </main>
      <section className="menu-section-2">
        <div className="menu-section-2-left">
          <h3 className="menu-section-2-h3">Click Order Now to start your order!</h3>
          <p className="menu-section-2-p">Once you sign in, you will have the ability to order any of the mouthwatering dishes! Click that button to the right or the sign-in button in the navigation bar above to build and submit your order!</p>
        </div>
        <div className="menu-section-2-right">
          <button className="menu-nav-ordernow" onClick={() => handleNavigation('/ordernow')}>Click to Order Now!</button>
        </div>
      </section>
      <footer className="menu-footer">
        <div className="menu-footer-message">Get in touch with us! Follow us on:</div>
        <div className="menu-footer-container">
          <i className="fa-brands fa-square-instagram fa-2xl menu-footer-smlink" id="menu-footer-instagram"></i>
          <i className="fa-brands fa-twitter fa-2xl menu-footer-smlink" id="menu-footer-twitter"></i>
          <i className="fa-brands fa-facebook fa-2xl menu-footer-smlink" id="menu-footer-facebook"></i>
          <i className="fa-brands fa-tiktok fa-2xl menu-footer-smlink" id="menu-footer-tiktok"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;