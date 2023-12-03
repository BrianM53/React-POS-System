import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import SubmitEditMenuItem from "./submitEditMenuItem";

function EditMenuItem({ selectedRowData, handleFinishEditing, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [editedMenuItemData, setEditedMenuItemData] = useState({
    product_name: "",
    price: "",
    category: "",
    product_description: "",
  });

  useEffect(() => {
    if (selectedRowData) {
      setEditedMenuItemData({ ...selectedRowData });
    }
  }, [selectedRowData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMenuItemData({ ...editedMenuItemData, [name]: value });
  };

  const updateMenuItem = async (e) => 
  {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
    
    try 
    {
        const response = await axios.put(
          `${BACKEND_URL}/addproducts/${editedMenuItemData.product_id}`,
          editedMenuItemData
        );

        console.log(response.data.message);
  
        if (response.data.message === "Product updated successfully") 
        {
          setErrorMsg(
            <div style={{ color: "green" }}>Menu item updated successfully.</div>
          );
          handleFinishEditing();
        } 
        else 
        {
          setErrorMsg(
            <div style={{ color: "red" }}>Error updating menu item.</div>
          );
        }
    } 
    catch (error) 
    {
    console.error("Error updating menu item:", error);
    setErrorMsg(
        <div style={{ color: "red" }}>Error updating menu item.</div>
    );
    }

  };

    return (
        <div className="edit-menu-item-popup">
          <h3>Edit Menu Item</h3>
          <div className="Login-msg">{errorMsg}</div>
    
          <button onClick={handleCancelEditing}>Cancel</button>
    
          <Form className="rounded p-3 p-sm-3" onSubmit={updateMenuItem}>
            <FloatingLabel label="Product Name" className="mb-3">
              <Form.Control
                name="product_name"
                type="text"
                value={editedMenuItemData.product_name}
                placeholder="Product Name"
                onChange={handleInputChange}
              />
            </FloatingLabel>
    
            <FloatingLabel label="Price" className="mb-3">
              <Form.Control
                name="price"
                type="number"
                value={editedMenuItemData.price}
                placeholder="Price"
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <FloatingLabel label="Category" className="mb-3">
          <Form.Control
            name="category"
            type="text"
            value={editedMenuItemData.category}
            placeholder="Category"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Product Description" className="mb-3">
          <Form.Control
            name="product_description"
            as="textarea"
            value={editedMenuItemData.product_description}
            placeholder="Product Description"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <div className="submit">
          <SubmitEditMenuItem editedMenuItemData={editedMenuItemData} />
        </div>
      </Form>
    </div>
  );
}

export default EditMenuItem;