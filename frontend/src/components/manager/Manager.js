import React from 'react';
import './Manager.css';
import LogoutButton from '../utility/logoutButton';
import generateReport from './generateReport';

function Manager() {
  // Replace this with the actual code to generate tables or charts

  return (
    <div>
      <div className='Manager'>
        <div className='report-labels'>

        </div>
        <div className="main-content">
          <p>lol</p>
        </div>
        <nav className='button-nav'>
          <ul>
            <li><a onClick={(e) => { e.preventDefault(); generateReport('Sales Report'); }}>Sales Report</a></li>
            <li><a onClick={(e) => { e.preventDefault(); generateReport('Excess Report'); }}>Excess Report</a></li>
            <li><a onClick={(e) => { e.preventDefault(); generateReport('Restock Report'); }}>Restock Report</a></li>
            <li><a onClick={(e) => { e.preventDefault(); generateReport('Sells Together'); }}>Sells Together</a></li>
            <li><a onClick={(e) => { e.preventDefault(); generateReport('Usage Chart'); }}>Usage Chart</a></li>
            <li><a onClick={(e) => { e.preventDefault(); generateReport('Add Employee'); }}>Add Employee</a></li>
          </ul>
        </nav>
        <nav className='button-nav'>
          <ul>
            <li><LogoutButton /></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Manager;











