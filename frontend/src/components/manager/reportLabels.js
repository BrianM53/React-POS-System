import React from 'react';

function ReportLabels({ activeReport }) {
  return (
    <div className='label-container'>
      <div className={activeReport === "Sales Report" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label-item'>Menu Item</a></li>
              <li><a className='label-item'>Price</a></li>
              <li><a className='label-item'>Amount Sold</a></li>
              <li><a className='label-item'>Total sales</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Excess Report" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label-item'>Ingredient</a></li>
              <li><a className='label-item'>Total Consumed</a></li>
              <li><a className='label-item'>Current Stock</a></li>
              <li><a className='label-item'>Past Stock</a></li>
              <li><a className='label-item'>% Sold</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Restock Report" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label-item'>Menu Item</a></li>
              <li><a className='label-item'>Ingredient</a></li>
              <li><a className='label-item'>Stock Level</a></li>
              <li><a className='label-item'>Restock Level</a></li>
              <li><a className='label-item'>Measurement Type</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Sells Together" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label-item'>First Menu Item</a></li>
              <li><a className='label-item'>Second Menu Item</a></li>
              <li><a className='label-item'>Sold Together</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Usage Chart" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label-item'>Amount of Ingredients Used</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Add Employee" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label-item'></a></li>
            </ul>
          </nav>
        </div>
    </div>
  );
}

export default ReportLabels;
