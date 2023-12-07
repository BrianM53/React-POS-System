import React from 'react';
import { Button } from "react-bootstrap";

/**
 * Validates the input data for submitting a menu item.
 * @function validateInput
 * @param {Object} menuItemData - The data of the menu item.
 * @returns {boolean} - Indicates whether the input is valid or not.
 */
function validateInput(menuItemData) {
    return menuItemData.product_name.length > 0 && 
    menuItemData.price > 0 &&
    menuItemData.category.length > 0 && 
    menuItemData.product_description.length > 0;
}

/**
 * Component for submitting menu item data.
 * @component
 * @function SubmitMenuItem
 * @param {Object} props - Component props.
 * @param {Object} props.menuItemData - The data of the menu item.
 * @returns {JSX.Element} - Rendered component.
 */
function SubmitMenuItem({ menuItemData }) {
  /**
   * Indicates whether the input data is valid for submission.
   * @type {boolean}
   */
  const isInputValid = validateInput(menuItemData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitMenuItem;