import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderNow.css";
import SpecialFontText from "../../fonts/specialFontText/SpecialFontText";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


import { useCart } from "../cart/CartContext";
import Header from "../app/header";
import { Categories } from "./categories";
import useDynamicScrollbar from "../utility/dynamicScrollbar";

library.add(fas, fab);

const OrderNow = () => {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [activeSection, setActiveSection] = useState("Sweet Crepes");
  const [productData, setProductData] = useState({}); // Initialize product data as an empty object
  const [cart, setCart] = useState([]); // New state for the cart
  const { addToCart, decrementQuantity, getCartLength } = useCart();
  const [customerEmail, setCustomerEmail] = useState(""); // State for customer email
  const [customerId, setCustomerId] = useState(""); // State for customer ID
  

  // dynamic scrollbar display
  const scrollRefs = {
    cartScrollRef: useRef(null),
    menuScrollRef: useRef(null),
  };

  const cartHasOverflow = useDynamicScrollbar(cart, scrollRefs.cartScrollRef);
  const menuHasOverflow = useDynamicScrollbar(productData[activeSection], scrollRefs.menuScrollRef);
  // const descriptionHasOverflow = true;

  useEffect(() => {
    // document.body.style.zoom = "80%";
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
    // Check if the product is already in the cart
    const cartItemIndex = cart.findIndex((item) => item.product_id === product.product_id);
  
    if (cartItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[cartItemIndex].quantity += 1;
      setCart(updatedCart); // Update the cart
    } else {
      // If the product is not in the cart, add it to the cart with quantity 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  
    // Update the category data
    const categoryData = productData[activeSection];
    const updatedCategoryData = categoryData.map((p) =>
      p.product_id === product.product_id ? { ...p, quantity: p.quantity + 1 } : p
    );
  
    setProductData((prevData) => ({
      ...prevData,
      [activeSection]: updatedCategoryData,
    }));
  
    addToCart(product); // Assuming addToCart is a function from CartContext, add the product to context
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

  const fetchCustomerId = async () => {
    console.log(customerEmail);
    try {
      if (!customerEmail) {
        setCustomerId(1);
        return 1;
      }

      const response = await axios.get(`${BACKEND_URL}/customers/${customerEmail}`);
      const customerId = response.data.customerID; // Adjust this based on your API response structure
      // Use the retrieved customerId for further processing (e.g., storing in state)
      console.log(customerId);
      return customerId;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        try {
          // Check if the email is a valid address
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(customerEmail)) {
            // Email is valid, attempt to add it as a new customer
            const response = await axios.post(`${BACKEND_URL}/customers/new-customer`, {
              email: customerEmail,
            });
            const customerId = response.data.customerID;
            console.log('New customer added with ID:', customerId);
            return customerId;
          } else {
            alert('Please enter a valid email address.');
          }
        } catch (error) {
          alert('Error adding new customer:', error);
          console.error('Error adding new customer:', error);
        }
      } else {
        alert('Error fetching customer ID:', error);
        console.error('Error fetching customer ID:', error);
        return -1;
      }
    }
  };

  const submitOrder = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail) && customerEmail) {
      alert('Please enter a valid email address.');
      return;
    }
  
    const customerId = await fetchCustomerId();
    if (customerId === -1) {
      return;
    }

    const orderId = 1; // Replace with the actual order ID if available
    const employeeId = 1; // Replace with the actual employee ID
    const totalCost = calculateTotalCost(); // Implement this function to calculate the total cost
    const paymentStatus = true; // Replace with the actual payment status
    const paymentMethod = "card"; // Replace with the actual payment method

    try {
      const response = await axios.post(`${BACKEND_URL}/orders/create`, {
        orderId,
        employeeId,
        customerId,
        totalCost,
        paymentStatus,
        paymentMethod,
        cart,
      });
      for (const product of cart) {
        console.log("Order details response:", product);
      }

      console.log("Order submitted successfully:", response.data);
      const updatedCart = [];
      // If your cart is stateful, update the state with the empty cart array
      setCart(updatedCart);
      const updatedProductData = { ...productData };
      Object.keys(updatedProductData).forEach((category) => {
        updatedProductData[category] = updatedProductData[category].map((product) => ({
          ...product,
          quantity: 0,
        }));
      });
      alert("Your order has been placed! Thank you for shopping with us!")
    } catch (error) {
      console.error("Error submitting order:", error);
      // Handle the error here, if needed
    }
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

      let imagePath;
      try {
        imagePath = require(`../../images/menu/${imageName}.jpg`);
      } catch (error) {
        imagePath = require('../../images/logo.png');
      }

      const descriptionHasOverflow = product.product_description.length > 36;
      // const descriptionHasOverflow = true;
      return (
        <div key={product.product_id} className="menu-body-entry-container" onClick={() => increment(product)}>
          <img
            src={imagePath}
            alt={product.product_name}
            className="menu-body-entry-photo"
          />
          <div className="menu-body-entry-description-container">
            <div className="menu-body-entry-title">{product.product_name}</div>
            <div
              className={descriptionHasOverflow ? 'menu-body-entry-description' : 'menu-body-entry-description-noscroll'}
            >
              {product.product_description}
            </div>
          </div>
          {/* <div className="menu-body-entry-amount-container">
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
          </div> */}
        </div>
      );
    });
  };

  const renderCartItems = () => {
    return cart.map((item) => {
      return (
        <div key={item.product_id} className="ticket-item">
          <div className="ticket-item-quantity">
            <div
              className="ticket-item-decrement"
              onClick={() => decrement(item.product_id)}
            >
              -
            </div>
            <div className="ticket-item-current-quantity">{item.quantity || 0}</div>
            <div
              className="ticket-item-increment"
              onClick={() => increment(item)}
            >
              +
            </div>
          </div>
          <div className="ticket-item-name-container">
            <div
              className="ticket-item-name">
              {item.product_name}
            </div>
          </div>
          <div className="ticket-item-price">
            {/* ${calculateTotalCost().toFixed(2)} */}
            {"$" + (item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      );
    });
  };


  return (
    <div className="menu-body">

      <Header />

      <main className="menu-main-menu">
        {/* <SpecialFontText as="div" className="menu-main-menu-header" fontSize="3.5rem">
          Order Now
        </SpecialFontText> */}

        <div className="category-container">
          <Categories activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        <div className="menu-main-menu-container">
          <div
            ref={scrollRefs.menuScrollRef}
            className={menuHasOverflow ? 'menu-main-menu-body' : 'menu-main-menu-body-noscroll'}
          >
            {/* <div className='menu-body-category-container'id={`menu-body-${activeSection}`}style={{ display: "flex" }}> */}
            {renderProducts()}
            {/* </div> */}
          </div>
          <div className="menu-main-menu-ticket-container">
            {/* <SpecialFontText as="div" className="ticket-container-title" fontSize="3.5rem">
              Your Cart
            </SpecialFontText> */}
            <div ref={scrollRefs.cartScrollRef} className={cartHasOverflow ? 'ticket-item-container' : 'ticket-item-container-noscroll'}>
              <div className={getCartLength() == 0 ? "temp-cart-text" : "temp-cart-text-none"}>
                Click an item to get started!
              </div>
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
                <div className="customer-info spaced-inputs">
                  <input
                    type="email"
                    placeholder="Customer Email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                  />
                </div>
                <div className="ticket-submit-button" onClick={submitOrder}>
                  Submit Order
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderNow;