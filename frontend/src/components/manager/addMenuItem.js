import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import SubmitMenuItem from "./submitMenuItem";  

import "./add.css";

/**
 * Component for adding a menu item.
 * @component
 * @function AddMenuItem
 * @param {Object} props - The component props.
 * @param {Function} props.onFinishAddingMenuItem - Callback function when adding a menu item is finished.
 * @param {Function} props.handleCancelEditing - Callback function to handle canceling the editing process.
 * @returns {JSX.Element} - Rendered component.
 */
function AddMenuItem({ onFinishAddingMenuItem, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [menuItemData, setMenuItemData] = useState({
    product_name: "",
    price: 0,
    category: "",
    product_description: "",
  });

  /**
   * Handles the input change event.
   * @function handleInputChange
   * @param {Object} e - The input change event.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenuItemData({ ...menuItemData, [name]: value });
  };

  /**
   * Adds a menu item.
   * @async
   * @function addMenuItem
   * @param {Object} e - The form submit event.
   */
  const addMenuItem = async (e) => {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try {
      const response = await axios.post(
        BACKEND_URL + "/addproducts/", 
        menuItemData
      );

      // console.log(response.data.message);

      if (response.data.message === "Product added successfully") 
      {
        setErrorMsg(
          <div style={{ color: "green" }}>Product added successfully.</div>
        );

        onFinishAddingMenuItem();
      } 
      else if (response.data.message === "Product already exists") {
        setErrorMsg(
          <div style={{ color: "red" }}>Product already exists.</div>
        );
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setErrorMsg(<div style={{ color: "red" }}>Error adding menu item.</div>);
    }
  }; 

  return (
    <div className="add-menu-item-content">
      <div className="title">Add Menu Item</div>
      <div className="Login-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing} className="x-out-btn" >X</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={addMenuItem}>
        <FloatingLabel label="Product name" className="mb-3">
          <Form.Control
            name="product_name"
            type="text"
            value={menuItemData.product_name}
            placeholder="Product name"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Price" className="mb-3">
          <Form.Control
            name="price"
            type="number"
            value={menuItemData.price}
            placeholder="Price"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Category" className="mb-3">
          <Form.Control
            name="category"
            type="text"
            value={menuItemData.category}
            placeholder="Category"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Product description" className="mb-3">
          <Form.Control
            name="product_description"
            type="text"
            value={menuItemData.product_description}
            placeholder="Product description"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <div className="submit">
          <SubmitMenuItem menuItemData={menuItemData} />
        </div>
      </Form>
    </div>
  );
}

export default AddMenuItem;