import React from 'react';
import './Manager.css';
import LogoutButton from '../utility/logoutButton';




function Manager() {
    // Replace this with the actual code to generate tables or charts
  
  return (
    <div className="Manager">
      <header className="Manager-header">
        <p>
          This is the Manager page.
        </p>
        <div className="button-container">
          <button onClick={() => generateReport('Sales Report')}>Sales Report</button>
          <button onClick={() => generateReport('Excess Report')}>Excess Report</button>
          <button onClick={() => generateReport('Restock Report')}>Restock Report</button>
          <button onClick={() => generateReport('Sells Together')}>Sells Together</button>
          <button onClick={() => generateReport('Usage Chart')}>Usage Chart</button>
        </div>
        <LogoutButton />
      </header>
    </div>
  );
}


export default Manager;