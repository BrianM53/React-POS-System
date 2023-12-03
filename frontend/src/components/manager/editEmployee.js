import React from 'react';

function EditEmployee({ selectedRowData, handleFinishEditing, handleCancelEditing }) {
    return (
      <div className="edit-employee-popup">
        <h3>Edit Employee</h3>
        <p>editEmployee is popping up, successful test</p>
        {/* Add your input fields and buttons here */}
        <button onClick={handleFinishEditing}>Cancel</button>
        <button onClick={handleCancelEditing}>Submit</button>
      </div>
    );
  }

export default EditEmployee;