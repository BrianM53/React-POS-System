import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import SubmitButton from "./submitInventoryItem";

function AddInventoryItem({ onFinishAddingInventoryItem }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [inventoryItemData, setInventoryItemData] = useState({
    inventory_item: "",
    stock_level: 0,
    restock_level: 0,
    measurement_type: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventoryItemData({ ...inventoryItemData, [name]: value });
  };

  const addInventoryItem = async (e) => {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try {
      const response = await axios.post(
        BACKEND_URL + "/inventory/",
        inventoryItemData
      );

      if (response.status === 200) {
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
      <div className="InventoryItem-msg">{errorMsg}</div>

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
          <SubmitButton inventoryItemData={inventoryItemData} />
        </div>
      </Form>
    </div>
  );
}

export default AddInventoryItem;