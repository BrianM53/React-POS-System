import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../app/header";
import './menu.css'
library.add(fas, fab);


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
    fetchProducts("Seasonal");
    fetchProducts("WOW");
  }, []);

  const renderProducts = (category) => {
    const products = productsByCategory[category];
  
    if (!products || products.length === 0) {
      return (
        <div className="empty-product-container">
            There are no products in '{category}' at this time.
        </div>
      );
    }
  
    return products.map((product) => {
      const imageName = product.product_name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[,]/g, "")
        .replace(/[&]/g, "and");
  
      return (
        <div key={product.product_id} className="menu-product-container">
          <div className="product-name">
            {product.product_name}
          </div>
          <div className="product-line"></div>
          <div className="product-price">
            ${product.price}
          </div>
        </div>
      );
    });
  };
  

  return (
    <div>
      <Header />
      <div className="menu-stage">
        <div className="menu-container">
          {/* <div className="image1">
            <img
            src='/cookie-butter.jpg'
            alt='Cookie butter crepe'
            />
          </div> */}

          <div className="column1">
            <div className="menu-category-container">
              <div className="category-title">
                Sweet Crepes
              </div>
              <div>
                {renderProducts("Sweet Crepes")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Savory Crepes
              </div>
              <div>
                {renderProducts("Savory Crepes")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Kids Crepes
              </div>
              <div>
                {renderProducts("Kids Crepes")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Hot Drinks
              </div>
              <div>
                {renderProducts("Hot Drinks")}
              </div>
            </div>
          </div>
          
          <div className="column2">
            <div className="menu-category-container">
              <div className="category-title">
                Breakfast Crepes
              </div>
              <div>
                {renderProducts("Breakfast Crepes")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Seasonal
              </div>
              <div>
                {renderProducts("Seasonal")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Waffles
              </div>
              <div>
                {renderProducts("Waffles")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Paninis
              </div>
              <div>
                {renderProducts("Paninis")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Salads
              </div>
              <div>
                {renderProducts("Salads")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Beverages
              </div>
              <div>
                {renderProducts("Beverages")}
              </div>
            </div>
            <div className="menu-category-container">
              <div className="category-title">
                Milkshakes
              </div>
              <div>
                {renderProducts("Milkshakes")}
              </div>
            </div>
          </div>


          {/* <div className="image2">
            <img
            src='/cookie-butter.jpg'
            alt='Cookie butter crepe'
            />
          </div>  */}

          {/* 

          <div className="menu-category-container">
            {renderProducts("Hot Drinks")}
          </div>


          

          <div className="menu-category-container">
            {renderProducts("Beverages")}
          </div>

          <div className="menu-category-container">
            {renderProducts("Milkshakes")}
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default Menu;
