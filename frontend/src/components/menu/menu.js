import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./menu.css";
import SpecialFontText from "../utility/specialFontText/SpecialFontText";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../app/header";
import { Categories } from "../orderNow/categories";
library.add(fas, fab);

const Menu = () => {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [activeSection, setActiveSection] = useState("Sweet Crepes");
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   document.body.style.zoom = "80%";
  // }, []);

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

  const renderProducts = () => 
  {
    if (!products) {
      return null; // Handle the case where data is still being fetched
    }
    
    return products.map((product) => 
    {
      const imageName = product.product_name
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[,]/g, "") // Remove commas
        .replace(/[&]/g, "and");

      const imagePath = require(`../../images/${imageName}.jpg`);
      return (
        <div key={product.product_id} className="menu-body-entry-container">
          <img
            src={imagePath}
            alt={product.product_name}
            className="menu-body-entry-photo"
          />
          <div className="menu-body-entry-description-container">
            <div className="menu-body-entry-title">{product.product_name}</div>
            <div className="menu-body-entry-description">
              {product.product_description}
            </div>
          </div>
        </div>
      )
    });
  };

  const handleCategoryClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="menu-body">

      <Header />

      <main className="menu-main-menu">

        <SpecialFontText as="div" className="menu-main-menu-header" fontSize="3.5rem">
          Menu
        </SpecialFontText>
        
        <Categories activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="menu-main-menu-body">
          <div
            className="menu-body-category-container"
            id={`menu-body-${activeSection}`}
            style={{ display: "flex" }}
          >
            {renderProducts()}
          </div>
        </div>

        <div className="menu-filler-block" />

      </main>
    </div>
  );
};

export default Menu;
