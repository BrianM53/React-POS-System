import React from 'react';
import { Button } from 'react-bootstrap';

function validateInput(editedInventoryItemData) {
  return (
    editedInventoryItemData.inventory_item.length > 0 &&
    editedInventoryItemData.stock_level >= 0 &&
    editedInventoryItemData.restock_level >= 0 &&
    editedInventoryItemData.measurement_type.length > 0 &&
    editedInventoryItemData.price >= 0
  );
}

function SubmitEditInventoryItem({ editedInventoryItemData }) {
  const isInputValid = validateInput(editedInventoryItemData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitEditInventoryItem;