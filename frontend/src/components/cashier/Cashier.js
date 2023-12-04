import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cashier.css";
import SpecialFontText from "../../fonts/specialFontText/SpecialFontText";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCart } from "../cart/CartContext";
import Header from "../app/header";
import { Categories } from "../orderNow/categories";
import useDynamicScrollbar from "../utility/dynamicScrollbar";
import LogoutButton from '../utility/logoutButton';

library.add(fas, fab);

const Cashier = () => {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [activeSection, setActiveSection] = useState("Sweet Crepes");
  const [productData, setProductData] = useState({}); // Initialize product data as an empty object
  const [cart, setCart] = useState([]); // New state for the cart
  const { addToCart, decrementQuantity } = useCart();
  const [customerEmail, setCustomerEmail] = useState(""); // State for customer email
  const [employeeId, setEmployeeId] = useState(""); // State for employee ID
  const [customerId, setCustomerId] = useState("");

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
      // console.log("found in cart. adding", product);
      const updatedCart = [...cart];
      updatedCart[cartItemIndex].quantity += 1;
      setCart(updatedCart); // Update the cart
    } else {
      // If the product is not in the cart, add it to the cart
      // console.log("not in cart. adding", product);
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

  const fetchCustomerId = async () => {
    console.log(customerEmail);
    try {
      if (!customerEmail) {
        setCustomerId(0);
        return 0;
      }

      const response = await axios.get(`${BACKEND_URL}/customers/${customerEmail}`);
      const customerId = response.data.customerID; // Adjust this based on your API response structure
      // Use the retrieved customerId for further processing (e.g., storing in state)
      console.log(customerId);
      return customerId;
    } catch (error) {
      console.error("Error fetching customer ID:", error);
      throw error; // Propagate the error back to the caller for handling
    }
  };

  const submitOrder = async () => {
    if (!employeeId) {
      // Prompt the user that employee ID is required
      alert('Employee ID is required to submit the order.');
      return;
    }

    const customerId = await fetchCustomerId();

    const orderId = 1; // Replace with the actual order ID if available
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
      });

      console.log("Order submitted successfully:", response.data);
      const updatedCart = [];
      // If your cart is stateful, update the state with the empty cart array
      setCart(updatedCart);
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

    return (
      <div className="product-row">
        {categoryData.map((product) => (
          <div key={product.product_id} className="menu-product-button" onClick={() => increment(product)}>
            <div className="menu-product-name">
              {product.product_name}
            </div>
            <div className="menu-product-quantity">
              <div className="menu-product-quantity">{product.quantity || 0}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };


  const renderCartItems = () => {
    return cart.map((item) => {
      const nameHasOverflow = !(item.product_name.length < 22);

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
              className={nameHasOverflow ? "ticket-item-name" : "ticket-item-name-noscroll"}>
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

      

      <main className="menu-main-menu">
        {/* <SpecialFontText as="div" className="menu-main-menu-header" fontSize="3.5rem">
          Order Now
        </SpecialFontText> */}
        <div className="logout-button-container">
          <LogoutButton />
        </div>
        
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
                  <input
                    type="text"
                    placeholder="Employee ID"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
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

export default Cashier;