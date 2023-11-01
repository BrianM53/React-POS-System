import React from "react";
import { Link } from "react-router-dom";
import NavOptions from "../utility/navOptions";
import { useRef, useEffect, useState } from "react";
import "./menu.css";
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

  // const refs =
  // {
  //     sweetCrepes: useRef(null),
  //     savoryCrepes: useRef(null),
  //     kidsCrepes: useRef(null),
  //     sweetParisWaffles: useRef(null),
  //     breakfastCrepesAndEggs: useRef(null),
  //     soupsSaladsAndPaninis: useRef(null),
  //     leBar: useRef(null),
  //     hotDrinksAndMilkshakes: useRef(null),
  //     waterAndBeverages: useRef(null),
  // }

  useEffect(() => {
    if (activeSection) {
      fetch(`${BACKEND_URL}/products/${activeSection}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [activeSection]);

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.product_id} className="menu-body-entry-container">
        <div className="menu-body-entry-description-container">
          <div className="menu-body-entry-title">{product.product_name}</div>
          <div className="menu-body-entry-description">
            {product.product_description}
          </div>
        </div>
      </div>
    ));
  };

  const handleCategoryClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="menu-body">
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

      <main className="menu-main-menu">
        <div className="menu-main-menu-header">Menu</div>
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
        <div className="menu-footer-message">
          Get in touch with us! Follow us on:
        </div>
        <div className="menu-footer-container">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="fa-2x"
            id="menu-footer-instagram"
          />
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className="fa-2x"
            id="menu-footer-twitter"
          />
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className="fa-2x"
            id="menu-footer-facebook"
          />
          <FontAwesomeIcon
            icon={["fab", "tiktok"]}
            className="fa-2x"
            id="menu-footer-tiktok"
          />
        </div>
      </footer>
    </div>
  );
};

export default Menu;
