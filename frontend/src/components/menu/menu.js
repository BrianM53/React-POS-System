import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../app/header";
import { Categories } from "../orderNow/categories";
library.add(fas, fab);

// ... (existing imports and code)

const Menu = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [productsByCategory, setProductsByCategory] = useState({});

  const fetchProducts = (category) => {
    fetch(`${BACKEND_URL}/products/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProductsByCategory((prevProducts) => ({
          ...prevProducts,
          [category]: data.map((product) => ({ ...product, quantity: 0 }))
        }));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  useEffect(() => {
    fetchProducts("Sweet Crepes");
    fetchProducts("Savory Crepes");
    fetchProducts("Kids Crepes");
    fetchProducts("Waffles");
    fetchProducts("Breakfast Crepes");
    fetchProducts("Salads");
    fetchProducts("Paninis");
    fetchProducts("Hot Drinks");
    fetchProducts("Milkshakes");
    fetchProducts("Beverages");
  }, []);

  const renderProducts = (category) => {
    const products = productsByCategory[category];

    if (!products) {
      return null; // Handle the case where data is still being fetched or no products found for the category
    }

    return products.map((product) => {
      const imageName = product.product_name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[,]/g, "")
        .replace(/[&]/g, "and");

      const imagePath = require(`../../images/menu/${imageName}.jpg`);

      return (
        <div key={product.product_id} className="menu-entry-container">
          <img
            src={imagePath}
            alt={product.product_name}
            className="menu-entry-photo"
          />
          <div className="entry-description-container">
            <div className="entry-title">{product.product_name}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="menu-body">
      <Header />
      <main className="menu-main-menu">
        <div className="menu-main-menu-body">
          <div className="menu-container" style={{ display: "flex" }}>
            {renderProducts("Sweet Crepes")}
          </div>
          
          <div className="menu-container" style={{ display: "flex" }}>
            {renderProducts("Savory Crepes")}
          </div>

          <div className="menu-container" style={{ display: "flex" }}>
            {renderProducts("Beverages")}
          </div>

          <div className="menu-container" style={{ display: "flex" }}>
            {renderProducts("Milkshakes")}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Menu;
