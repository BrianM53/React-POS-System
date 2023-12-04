import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import SubmitEditInventoryItem from "./submitEditInventoryItem";

function EditInventoryItem({ selectedRowData, handleFinishEditing, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [editedInventoryItemData, setEditedInventoryItemData] = useState({
    inventory_item: "",
    stock_level: 0,
    restock_level: 0,
    measurement_type: "",
    price: 0,
  });

  useEffect(() => {
    if (selectedRowData) {
      setEditedInventoryItemData({ ...selectedRowData });
    }
  }, [selectedRowData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInventoryItemData({ ...editedInventoryItemData, [name]: value });
  };

  const updateInventoryItem = async (e) => {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try {
      const response = await axios.put(
        `${BACKEND_URL}/inventory/${editedInventoryItemData.inventory_id}`,
        editedInventoryItemData
      );

      console.log(response.data.message);

      if (response.data.message === "Inventory item updated successfully") {
        setErrorMsg(
          <div style={{ color: "green" }}>Inventory item updated successfully.</div>
        );
        handleFinishEditing();
      } else {
        setErrorMsg(
          <div style={{ color: "red" }}>Error updating inventory item.</div>
        );
      }
    } catch (error) {
      console.error("Error updating inventory item:", error);
      setErrorMsg(
        <div style={{ color: "red" }}>Error updating inventory item.</div>
      );
    }
  };

  return (
    <div className="edit-inventory-item-popup">
      <h3>Edit Inventory Item</h3>
      <div className="error-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing}>Cancel</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={updateInventoryItem}>
        <FloatingLabel label="Inventory Item" className="mb-3">
          <Form.Control
            name="inventory_item"
            type="text"
            value={editedInventoryItemData.inventory_item}
            placeholder="Inventory Item"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Stock Level" className="mb-3">
          <Form.Control
            name="stock_level"
            type="number"
            value={editedInventoryItemData.stock_level}
            placeholder="Stock Level"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Restock Level" className="mb-3">
          <Form.Control
            name="restock_level"
            type="number"
            value={editedInventoryItemData.restock_level}
            placeholder="Restock Level"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Measurement Type" className="mb-3">
          <Form.Control
            name="measurement_type"
            type="text"
            value={editedInventoryItemData.measurement_type}
            placeholder="Measurement Type"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Price" className="mb-3">
          <Form.Control
            name="price"
            type="number"
            value={editedInventoryItemData.price}
            placeholder="Price"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <div className="submit">
          <SubmitEditInventoryItem editedInventoryItemData={editedInventoryItemData} />
        </div>
      </Form>
    </div>
  );
}

export default EditInventoryItem;