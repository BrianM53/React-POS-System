import React from "react";
import { Link } from "react-router-dom";
import NavOptions from "../utility/navOptions";
import { useEffect, useState, useRef } from "react";
import "./OrderNow.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../cart/CartContext";
// import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas, fab);

/* order now functionality still not working */

const OrderNow = () => {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [activeSection, setActiveSection] = useState("Sweet Crepes");
  const [products, setProducts] = useState([]);
  const { addToCart, decrementQuantity } = useCart();

  const handleCategoryClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/products/${activeSection}`)
      .then((response) => response.json())
      .then((data) => {
        const productsWithCorrectPrice = data.map((product) => ({
          ...product,
          price: parseFloat(product.price), // Convert price to a float here
        }));
        setProducts(productsWithCorrectPrice);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [activeSection]);

  const increment = (product) => {
    // Logic to increment product quantity
    console.log("Adding to cart", product);
    addToCart(product);
  };

  const decrement = (productId) => {
    // Logic to decrement product quantity
    decrementQuantity(productId);
  };

  const renderProducts = () => {
    return products.map((product) => {
      const imageName = product.product_name
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[,]/g, "") // Remove commas
        .replace(/[&]/g, "and");

      const imagePath = require(`../../images/${imageName}.jpg`);
      return (
        <div key={product.product_id} className="menu-body-entry-container">
          {/* Placeholder image; you will need to replace '/sweetParisLocation.jpeg' with the actual image path */}
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
          <div className="menu-body-entry-amount-container">
            <div
              className="decrement-button"
              onClick={() => decrement(product.product_id)}
            >
              -
            </div>
            <div className="amount-counter">{product.quantity || 0}</div>{" "}
            {/* Ensure the quantity is initialized */}
            <div
              className="increment-button"
              onClick={() => increment(product)}
            >
              +
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>

      <nav className="menu-nav">
        <div className="order-now-nav-left">
          <Link to="/app">
            <FontAwesomeIcon icon={["fas", "arrow-left"]} className="fa-2x" />
          </Link>
          <Link to="/order-now-settings">
            <FontAwesomeIcon
              icon={["fas", "gear"]}
              className="fa-2x"
              id="menu-nav-settings-icon"
            />
          </Link>
        </div>
        <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
        <NavOptions />
        <div className="order-now-nav-right">
          <Link to="/cart">
            <FontAwesomeIcon
              icon={["fas", "cart-shopping"]}
              className="fa-2x"
              id="menu-nav-settings-icon"
            />
          </Link>
        </div>
      </nav>

      <main className="menu-main-menu">
        <div className="menu-main-menu-header">Order Now</div>
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
    </div>
  );
};

export default OrderNow;
