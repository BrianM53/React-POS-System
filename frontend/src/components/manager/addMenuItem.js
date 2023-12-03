import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import SubmitMenuItem from "./submitMenuItem"; 

function AddMenuItem({ onFinishAddingMenuItem }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [menuItemData, setMenuItemData] = useState({
    product_name: "",
    price: "",
    category: "",
    product_description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenuItemData({ ...menuItemData, [name]: value });
  };

  const addMenuItem = async (e) => {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try {
      const response = await axios.post(
        BACKEND_URL + "/addproducts/", 
        menuItemData
      );
      if (response.data.message === "Menu item added successfully") {
        setErrorMsg(
          <div style={{ color: "green" }}>Menu item added successfully.</div>
        );

        onFinishAddingMenuItem();
      } else if (response.data.message === "Menu item already exists") {
        setErrorMsg(
          <div style={{ color: "red" }}>Menu item already exists.</div>
        );
      }
    } catch (error) {
      console.error("Error adding menu item:", error);
      setErrorMsg(<div style={{ color: "red" }}>Error adding menu item.</div>);
    }
  };

  return (
    <div className="add-menu-item-content">
      <div className="Login-msg">{errorMsg}</div>

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