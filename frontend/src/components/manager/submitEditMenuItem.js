import React from 'react';
import { Button } from "react-bootstrap";

function validateInput(editedMenuItemData) {
  return (
    editedMenuItemData.product_name.length > 0 &&
    editedMenuItemData.price > 0 &&
    editedMenuItemData.category.length > 0 &&
    editedMenuItemData.product_description.length > 0
  );
}

function SubmitEditMenuItem({ editedMenuItemData }) {
  const isInputValid = validateInput(editedMenuItemData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitEditMenuItem;