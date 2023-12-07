import React from 'react';
import { Button } from "react-bootstrap";

/**
 * Validates the input data for editing a menu item.
 * @function validateInput
 * @param {Object} editedMenuItemData - The data of the edited menu item.
 * @returns {boolean} - Indicates whether the input is valid or not.
 */
function validateInput(editedMenuItemData) {
  return (
    editedMenuItemData.product_name.length > 0 &&
    editedMenuItemData.price > 0 &&
    editedMenuItemData.category.length > 0 &&
    editedMenuItemData.product_description.length > 0
  );
}

/**
 * Component for submitting the edited menu item data.
 * @component
 * @function SubmitEditMenuItem
 * @param {Object} props - Component props.
 * @param {Object} props.editedMenuItemData - The data of the edited menu item.
 * @returns {JSX.Element} - Rendered component.
 */
function SubmitEditMenuItem({ editedMenuItemData }) {
    /**
   * Indicates whether the input data is valid for submission.
   * @type {boolean}
   */
  const isInputValid = validateInput(editedMenuItemData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitEditMenuItem;