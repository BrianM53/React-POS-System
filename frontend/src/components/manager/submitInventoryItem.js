import React from 'react';
import { Button } from "react-bootstrap";

/**
 * Validates the input data for submitting an inventory item.
 * @function validateInput
 * @param {Object} inventoryItemData - The data of the inventory item.
 * @returns {boolean} - Indicates whether the input is valid or not.
 */
function validateInput(inventoryItemData) {
    return inventoryItemData.inventory_item.length > 0 && 
    inventoryItemData.stock_level >= 0 &&
    inventoryItemData.restock_level >= 0 && 
    inventoryItemData.measurement_type.length > 0 &&
    inventoryItemData.price >= 0;
}

/**
 * Component for submitting inventory item data.
 * @component
 * @function SubmitInventoryItem
 * @param {Object} props - Component props.
 * @param {Object} props.inventoryItemData - The data of the inventory item.
 * @returns {JSX.Element} - Rendered component.
 */
function SubmitInventoryItem({ inventoryItemData }) {
  /**
   * Indicates whether the input data is valid for submission.
   * @type {boolean}
   */
  const isInputValid = validateInput(inventoryItemData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitInventoryItem;