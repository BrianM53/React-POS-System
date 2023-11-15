import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavOptions from "../utility/navOptions";
import "./OrderNow.css";
import SpecialFontText from "../specialFontText/SpecialFontText";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../cart/CartContext";
import Header from "../utility/header";
library.add(fas, fab);

const OrderNow = () => {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [activeSection, setActiveSection] = useState("Sweet Crepes");
  const [productData, setProductData] = useState({}); // Initialize product data as an empty object
  const [cart, setCart] = useState([]); // New state for the cart
  const { addToCart, decrementQuantity } = useCart();

  const handleCategoryClick = (section) => {
    setActiveSection(section);
  };
  

  useEffect(() => {
    document.body.style.zoom = "80%";
    // Check if product data for the active category is already fetched
    if (!productData[activeSection]) {
      fetch(`${BACKEND_URL}/products/${activeSection}`)
        .then((response) => response.json())
        .then((data) => {
          const productsWithQuantity = data.map((product) => ({
            ...product,
            quantity: 0, // Initialize quantity to 0
          }));

          // Update product data for the active category
          setProductData((prevData) => ({
            ...prevData,
            [activeSection]: productsWithQuantity,
          }));
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [activeSection, productData]);

  const increment = (product) => {
    const categoryData = productData[activeSection];
    const updatedCategoryData = categoryData.map((p) =>
      p.product_id === product.product_id
        ? { ...p, quantity: p.quantity + 1 }
        : p
    );

    // Update the category data
    setProductData((prevData) => ({
      ...prevData,
      [activeSection]: updatedCategoryData,
    }));

    // Check if the product is already in the cart
    const cartItemIndex = cart.findIndex((item) => item.product_id === product.product_id);

    if (cartItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[cartItemIndex].quantity += 1;
      setCart(updatedCart); // Update the cart
    } else {
      // If the product is not in the cart, add it to the cart
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }

    addToCart(product);
  };


  const decrement = (productId) => {
    // Find the product in the active section's data
    const categoryData = productData[activeSection];
    const productIndex = categoryData.findIndex((p) => p.product_id === productId);

    if (productIndex !== -1) {
      // Update the quantity of the product in the active section
      const updatedCategoryData = [...categoryData];
      if (updatedCategoryData[productIndex].quantity > 0) {
        updatedCategoryData[productIndex].quantity -= 1;
      }
      setProductData((prevData) => ({
        ...prevData,
        [activeSection]: updatedCategoryData,
      }));
    }

    // Update the cart
    const cartItemIndex = cart.findIndex((item) => item.product_id === productId);
    if (cartItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[cartItemIndex].quantity > 1) {
        updatedCart[cartItemIndex].quantity -= 1;
      } else {
        // Remove the item from the cart if quantity is 1 or less
        updatedCart.splice(cartItemIndex, 1);
      }
      setCart(updatedCart);
    }

    // Call the decrementQuantity method from your CartContext, if needed
    decrementQuantity(productId);
  };

  const submitOrder = () => {
    // Send a request to your backend API to create a new order
    console.log("Submitting order...");
    fetch(`${BACKEND_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employeeId: "yourEmployeeId", // Replace with the actual employeeId
        customerId: "yourCustomerId", // Replace with the actual customerId
        totalCost: calculateTotalCost(), // Implement this function to calculate the total cost
        paymentMethod: "card", // Replace with the actual payment method
        paymentStatus: "yourPaymentStatus", // Replace with the actual payment status
        products: cart, // Send the cart items as part of the request
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order submitted successfully:", data);
        // Optionally, you can clear the cart or perform any other actions after submitting the order
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  const calculateTotalCost = () => {
    // Implement this function to calculate the total cost based on items in the cart
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderProducts = () => {
    const categoryData = productData[activeSection];

    if (!categoryData) {
      return null; // Handle the case where data is still being fetched
    }

    return categoryData.map((product) => {
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
          <div className="menu-body-entry-amount-container">
            <div
              className="decrement-button"
              onClick={() => decrement(product.product_id)}
            >
              -
            </div>
            <div className="amount-counter">{product.quantity || 0}</div>
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

  const renderCartItems = () => {
    return cart.map((item) => (
      <div key={item.product_id} className="ticket-item">
        <div className="ticket-item-quantity">
          <div className="ticket-item-decrement">-</div>
          <div className="ticket-item-current-quantity">{item.quantity || 0}</div>
          <div className="ticket-item-increment">+</div>
        </div>
        <div className="ticket-item-name">{item.product_name}</div>
        <div className="ticket-item-price">{item.price}</div>
      </div>
    ));
  };

  return (
    <div className="menu-body">

      <Header />

      <main className="menu-main-menu">
        <SpecialFontText as="div" className="menu-main-menu-header" fontSize="3.5rem">
          Order Now
        </SpecialFontText>

        <div className="menu-main-menu-categories">
          <div className="menu-main-menu-category" id="menu-main-menu-sweet-crepes" onClick={() => handleCategoryClick('sweetCrepes')}>
            Sweet Crepes
          </div>
          <div className="menu-main-menu-category" id="menu-main-menu-savory-crepes" onClick={() => handleCategoryClick('savoryCrepes')}    >
            Savory Crepes
          </div>
          <div className="menu-main-menu-category" id="menu-main-menu-kids-crepes" onClick={() => handleCategoryClick('kidsCrepes')}       >
            Kids Crepes
          </div>
          <div className="menu-main-menu-category" id="menu-main-menu-sweet-paris-waffles" onClick={() => handleCategoryClick('sweetParisWaffles')}        >
            Sweet Paris Waffles
          </div>
          <div className="menu-main-menu-category" id="menu-main-menu-breakfast-crepes-and-eggs" onClick={() => handleCategoryClick('breakfastCrepesAndEggs')}    >
            Breakfast Crepes & Eggs
          </div>
          <div className="menu-main-menu-category" id="menu-main-menu-soups-salads-and-paninis" onClick={() => handleCategoryClick('soupsSaladsAndPaninis')}      >
            Soups, Salads & Paninis
          </div>
          <div className="menu-main-menu-category" id="menu-main-menu-le-bar" onClick={() => handleCategoryClick('leBar')}    >
            Le Bar
          </div>
          <div className="menu-main-menu-category" id="menu-main-menu-hot-drinks-and-milkshakes" onClick={() => handleCategoryClick('hotDrinksAndMilkshakes')}      >
            Hot Drinks & Milkshakes
          </div>
          <div className="menu-main-menu-category" id="menu-main-menu-water-and-beverages" onClick={() => handleCategoryClick('waterAndBeverages')}     >
            Water & Beverages
          </div>
        </div>

        <div className="menu-main-menu-container">
          <div className="menu-main-menu-body">
            <div
              className="menu-body-category-container"
              id={`menu-body-${activeSection}`}
              style={{ display: "flex" }}
            >
              {renderProducts()}
            </div>
          </div>
          <div className="menu-main-menu-ticket-container">
            <SpecialFontText as="div" className="ticket-container-title" fontSize="3.5rem">
              Your Cart
            </SpecialFontText>
            <div className="ticket-item-container">
              {renderCartItems()}
            </div>
            <div className="ticket-total-and-order-container">
              <div className="ticket-total-container">
                <div className="ticket-total-title">Your Total:</div>
                <div className="ticket-total-title">
                  ${calculateTotalCost().toFixed(2)}
                </div>
              </div>
              <div className="ticket-submit-container">
                <div className="ticket-submit-button" onClick={submitOrder}>
                  Submit Order!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-now-filler-block" />
      </main>
    </div>
  );
};

export default OrderNow;