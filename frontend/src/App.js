import React from "react";
import NavOptions from "./components/utility/navOptions";
import Weather from "./components/weather/Weather";
import "./App.css";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(fas, fab);

const App = () => {
  return (
    <div className="menu-body">
      <Weather />
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
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
        <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
        <NavOptions />
      </nav>
      <main className="menu-main">
        <section className="menu-main-section-1">
          <h1 className="menu-main-section-1-h1">Let Them Eat Crepes!</h1>
          <p className="menu-main-section-1-p">
            Welcome to Sweet Paris' customer order interface! Feel free to
            browse the Menu by clicking the Menu tab, or check out the About Us
            and Contact Us pages if you're interested. Or, if you're ready to
            order, click the Order Now! button below to get started! Fresh
            crepes are just a few clicks away!
            <br /> {}
            -
            <br /> {}
            Once you're on the menu page, go through each product category and
            click the plus button to add a product from that category to your
            cart. If you would like to remove them from your cart, you may click
            on the shopping cart icon above to edit your order. Then, when
            you're finished, click on the shopping cart and click on the Pay
            Now! button and enter your details. Then, you're all set!
          </p>
        </section>
        <aside className="menu-main-aside">
          <img
            src="/sweetParisLocation.jpeg"
            alt="Sweet Crepes Logo"
            className="menu-main-aside-images"
          />
          {}
        </aside>
      </main>
      <section className="menu-section-2">
        <div className="menu-section-2-left">
          <h3 className="menu-section-2-h3">
            Click Order Now to start your order!
          </h3>
          <p className="menu-section-2-p">
            Once you sign in, you will have the ability to order any of the
            mouthwatering dishes! Click that button to the right or the sign-in
            button in the navigation bar above to build and submit your order!
          </p>
        </div>
      </section>
      <footer className="menu-footer">
        <div className="menu-footer-message">
          Get in touch with us! Follow us on:
        </div>
        <div className="menu-footer-container">
          {/* <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x" id="menu-footer-instagram" />
          <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x" id="menu-footer-twitter" />
          <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x" id="menu-footer-facebook" />
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x" id="menu-footer-tiktok" /> */}
        </div>
      </footer>
    </div>
  );
};

export default App;
