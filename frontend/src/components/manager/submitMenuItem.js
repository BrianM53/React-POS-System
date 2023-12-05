import React from 'react';
import { Button } from "react-bootstrap";

function validateInput(menuItemData) {
    return menuItemData.product_name.length > 0 && 
    menuItemData.price > 0 &&
    menuItemData.category.length > 0 && 
    menuItemData.product_description.length > 0;
}

function SubmitMenuItem({ menuItemData }) {
  const isInputValid = validateInput(menuItemData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitMenuItem;