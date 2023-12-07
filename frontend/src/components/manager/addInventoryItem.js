import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import SubmitInventoryItem from "./submitInventoryItem";

import "./add.css";

/**
 * Component for adding an inventory item.
 * @component
 * @function AddInventoryItem
 * @param {Object} props - The component props.
 * @param {Function} props.onFinishAddingInventoryItem - Callback function when adding an inventory item is finished.
 * @param {Function} props.handleCancelEditing - Callback function to handle canceling the editing process.
 * @returns {JSX.Element} - Rendered component.
 */
function AddInventoryItem({ onFinishAddingInventoryItem, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [inventoryItemData, setInventoryItemData] = useState({
    inventory_item: "",
    stock_level: 0, 
    restock_level: 0,
    measurement_type: "",
    price: 0,
  });

  /**
   * Handles the input change event.
   * @function handleInputChange
   * @param {Object} e - The input change event.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventoryItemData({ ...inventoryItemData, [name]: value });
  };

  /**
   * Adds an inventory item.
   * @async
   * @function addInventoryItem
   * @param {Object} e - The form submit event.
   */
  const addInventoryItem = async (e) => 
  {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  
    try {
      const response = await axios.post(
        BACKEND_URL + "/inventory/",
        inventoryItemData
      );
  
      // console.log(response.data.message);
  
      if (response.data.message === "Inventory item added successfully") {
        setErrorMsg(
          <div style={{ color: "green" }}>
            Inventory item added successfully.
          </div>
        );
        onFinishAddingInventoryItem();
      } else {
        setErrorMsg(
          <div style={{ color: "red" }}>Error adding inventory item.</div>
        );
      }
    } catch (error) {
      console.error("Error adding inventory item:", error);
  
      if (error.response) {
        setErrorMsg(
          <div style={{ color: "red" }}>{error.response.data.message}</div>
        );
      } else {
        setErrorMsg(
          <div style={{ color: "red" }}>Error adding inventory item.</div>
        );
      }
    }
  };

  return (
    <div className="add-inventory-item-content">
      <div className="title">Add Inventory Item</div>
      <div className="InventoryItem-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing} className="x-out-btn" >X</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={addInventoryItem}>
        <FloatingLabel label="Inventory Item" className="mb-3">
          <Form.Control
            name="inventory_item"
            type="text"
            value={inventoryItemData.inventory_item}
            placeholder="Inventory Item"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Stock Level" className="mb-3">
          <Form.Control
            name="stock_level"
            type="number"
            value={inventoryItemData.stock_level}
            placeholder="Stock Level"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Restock Level" className="mb-3">
          <Form.Control
            name="restock_level"
            type="number"
            value={inventoryItemData.restock_level}
            placeholder="Restock Level"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Measurement Type" className="mb-3">
          <Form.Control
            autoFocus
            name="measurement_type"
            type="text"
            value={inventoryItemData.measurement_type}
            placeholder="Measurement Type"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Price" className="mb-3">
          <Form.Control
            name="price"
            type="number"
            value={inventoryItemData.price}
            placeholder="Price"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <div className="submit">
          <SubmitInventoryItem inventoryItemData={inventoryItemData} />
        </div>
      </Form>
    </div>
  );
}

export default AddInventoryItem;