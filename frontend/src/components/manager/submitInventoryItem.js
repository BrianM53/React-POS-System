import React from 'react';
import { Button } from "react-bootstrap";

function validateInput(inventoryItemData) {
    return inventoryItemData.inventory_item.length > 0 && 
    inventoryItemData.stock_level >= 0 &&
    inventoryItemData.restock_level >= 0 && 
    inventoryItemData.measurement_type.length > 0 &&
    inventoryItemData.price >= 0;
}

function SubmitInventoryItem({ inventoryItemData }) {
  const isInputValid = validateInput(inventoryItemData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitInventoryItem;