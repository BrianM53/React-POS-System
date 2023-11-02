import React, { useState } from 'react';
import LogoutButton from '../utility/logoutButton'; // Import the LogoutButton component
import './Cashier.css';

function Cashier() {
  // State to track the products and their quantities
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [products, setProducts] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]); // Track ordered products separately
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const [employeeID, setEmployeeID] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');


  // Function to add a product to the order
  const addProduct = () => {
    if (productName.trim() && quantity.trim()) {
      fetch(`${BACKEND_URL}/products/name/${productName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.product_name) {
            const existingProductIndex = orderedProducts.findIndex(
              (product) => product.name === data.product_name
            );
  
            if (existingProductIndex !== -1) {
              // If the product already exists, update its quantity
              const updatedProducts = [...orderedProducts];
              updatedProducts[existingProductIndex].quantity += parseInt(quantity);
              setOrderedProducts(updatedProducts);
            } else {
              // If the product is not in the order, add a new row
              const newProduct = {
                name: data.product_name,
                quantity: parseInt(quantity),
              };
              setOrderedProducts([...orderedProducts, newProduct]);
            }
  
            // Clear the input fields
            setProductName('');
            setQuantity('');
          } else {
            console.error(`Product '${productName}' not found in the database.`);
          }
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    } else {
      console.error("Please enter a valid product name and quantity.");
    }
  };
  
  
  

  // Function to submit the order to the database
  const submitOrder = () => {
    // Implement database submission logic here
    // You'll typically make an API call to send the orderedProducts data to your server
  };

  const productRows = orderedProducts.map((product, index) => (
    <tr key={index}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
    </tr>
  ));

  return (
    <div className="center-box">
      <header className="Cashier-header">
        <div className="top-right">
          <LogoutButton />
        </div>
      </header>

      <div className="add-product-box">
        <div className="input-wrapper">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={addProduct}>
          +
        </button>
      </div>

      <div className="order-box">
        <table className="order-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {productRows}
          </tbody>
        </table>

        <button className="submit-button" onClick={submitOrder}>
          Submit Order
        </button>
      </div>

      <div className="employee-customer-box">
        <div className="input-wrapper">
          <label htmlFor="employee-id">Employee ID</label>
          <input
            type="text"
            id="employee-id"
            placeholder="Employee ID"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="customer-email">Customer Email</label>
          <input
            type="email"
            id="customer-email"
            placeholder="Customer Email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Cashier;
