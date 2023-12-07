import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Validates the input data for editing an inventory item.
 * @function validateInput
 * @param {Object} editedInventoryItemData - The data of the edited inventory item.
 * @returns {boolean} - Indicates whether the input is valid or not.
 */
function validateInput(editedInventoryItemData) {
  return (
    editedInventoryItemData.inventory_item.length > 0 &&
    editedInventoryItemData.stock_level >= 0 &&
    editedInventoryItemData.restock_level >= 0 &&
    editedInventoryItemData.measurement_type.length > 0 &&
    editedInventoryItemData.price >= 0
  );
}

/**
 * Component for submitting the edited inventory item data.
 * @component
 * @function SubmitEditInventoryItem
 * @param {Object} props - Component props.
 * @param {Object} props.editedInventoryItemData - The data of the edited inventory item.
 * @returns {JSX.Element} - Rendered component.
 */
function SubmitEditInventoryItem({ editedInventoryItemData }) {
  /**
   * Indicates whether the input data is valid for submission.
   * @type {boolean}
   */
  const isInputValid = validateInput(editedInventoryItemData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitEditInventoryItem;