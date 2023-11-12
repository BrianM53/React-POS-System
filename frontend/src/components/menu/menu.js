import React from "react";
import { Link } from "react-router-dom";
import NavOptions from "../utility/navOptions";
import { useRef, useEffect, useState } from "react";
import "./menu.css";
import SpecialFontText from "../specialFontText/SpecialFontText";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(fas, fab);

const Menu = () => {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [activeSection, setActiveSection] = useState("Sweet Crepes");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (activeSection) {
      fetch(`${BACKEND_URL}/products/${activeSection}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.map((product) => ({ ...product, quantity: 0 })));
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [activeSection]);

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.product_id} className="menu-body-entry-container">
        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
        <div className="menu-body-entry-description-container">
          <div className="menu-body-entry-title">{product.product_name}</div>
          <div className="menu-body-entry-description">
            {product.product_description}
          </div>
        </div>
        <div className="menu-body-entry-amount-container">
          <div className="decrement-button" onClick={() => decrementQuantity(product)}>
            -
          </div>
          <div className="amount-counter">{product.quantity}</div>
          <div className="increment-button" onClick={() => incrementQuantity(product)}>
            +
          </div>
        </div>
      </div>
    ));
  };

  const incrementQuantity = (product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((p) => {
        if (p.product_id === product.product_id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
    });
  };

  const decrementQuantity = (product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((p) => {
        if (p.product_id === product.product_id && p.quantity > 0) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
    });
  };

  const handleCategoryClick = (section) => {
    setActiveSection(section);
  };


  return (
    <div className="menu-body">
      <SpecialFontText as="header" className="menu-header" >
        Welcome to the Sweet Paris Cafe!
      </SpecialFontText>

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
        <SpecialFontText as="div" className="menu-nav-title">
          Sweet Paris: Crepes and Cafe
        </SpecialFontText>
        <NavOptions />
      </nav>

      <main className="menu-main-menu">

        <SpecialFontText as="div" className="menu-main-menu-header" fontSize="3.5rem">
          Menu
        </SpecialFontText>
        <div className="menu-main-menu-categories">
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-sweet-crepes"
            onClick={() => handleCategoryClick("Sweet Crepes")}
          >
            Sweet Crepes
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-kids-crepes"
            onClick={() => handleCategoryClick("Savory Crepes")}
          >
            Savory Crepes
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-kids-crepes"
            onClick={() => handleCategoryClick("Kids Crepes")}
          >
            Kids Crepes
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-sweet-paris-waffles"
            onClick={() => handleCategoryClick("Waffles")}
          >
            Sweet Paris Waffles
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-breakfast-crepes-and-eggs"
            onClick={() => handleCategoryClick("Breakfast Crepes")}
          >
            Breakfast Crepes & Eggs
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-salads"
            onClick={() => handleCategoryClick("Salads")}
          >
            Salads
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-paninis"
            onClick={() => handleCategoryClick("Paninis")}
          >
            Paninis
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-hot-drinks"
            onClick={() => handleCategoryClick("Hot Drinks")}
          >
            Hot Drinks
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-milkshakes"
            onClick={() => handleCategoryClick("Milkshakes")}
          >
            Milkshakes
          </div>
          <div
            className="menu-main-menu-category"
            id="menu-main-menu-beverages"
            onClick={() => handleCategoryClick("Beverages")}
          >
            Beverages
          </div>
        </div>
        <div className="menu-main-menu-body">
          <div
            className="menu-body-category-container"
            id={`menu-body-${activeSection}`}
            style={{ display: "flex" }}
          >
            {renderProducts()}
          </div>
        </div>
      </main>
      <footer className="menu-footer">
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
      </footer>
    </div>
  );
};

export default Menu;
