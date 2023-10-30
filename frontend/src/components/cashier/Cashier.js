import React, { useState } from 'react';
import LogoutButton from '../utility/logoutButton'; // Import the LogoutButton component
import './Cashier.css';

function Cashier() {
  // State to track the products and their quantities
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const [employeeID, setEmployeeID] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  // Function to add a product to the order
  const addProduct = () => {
    if (productName && quantity) {
      const newProduct = { name: productName, quantity: quantity };
      setProducts([...products, newProduct]);
      setProductName('');
      setQuantity('');
    }
  };

  // Function to submit the order to the database
  const submitOrder = () => {
    // Implement database submission logic here
    // You'll typically make an API call to send the order data to your server
  };

  // Function to create empty slots for the table
  const createEmptySlots = (count) => {
    const emptySlots = [];
    for (let i = 0; i < count; i++) {
      emptySlots.push(
        <tr key={`empty-${i}`}>
          <td className="empty-slot"></td>
          <td className="empty-slot"></td>
        </tr>
      );
    }
    return emptySlots;
  };

  // Define the number of empty slots you want in the table
  const emptySlotCount = 5; // Change this value as needed

  const productRows = products.map((product, index) => (
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
            {createEmptySlots(emptySlotCount)}
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
