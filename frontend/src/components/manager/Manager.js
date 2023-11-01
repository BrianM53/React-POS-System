import React from 'react';
import './Manager.css';
import LogoutButton from '../utility/logoutButton';
import generateReport from './generateReport';

function Manager() {
  // Replace this with the actual code to generate tables or charts

  return (
    <div className="Manager">
      <div className="button-container">
        <button onClick={() => generateReport('Sales Report')}>Sales Report</button>
        <button onClick={() => generateReport('Excess Report')}>Excess Report</button>
        <button onClick={() => generateReport('Restock Report')}>Restock Report</button>
        <button onClick={() => generateReport('Sells Together')}>Sells Together</button>
        <button onClick={() => generateReport('Usage Chart')}>Usage Chart</button>
        <button onClick={() => generateReport('Add Employee')}>Add Employee</button>
      </div>
      <div className="Manager-content">
        {/* Your tables and charts go here */}
      </div>
      <LogoutButton />
    </div>
  );
}

export default Manager;





