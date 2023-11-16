import React from 'react';

function ReportButtons({ activeReport, handleReport }) {
  return (
    <div>
        <nav className='report-btn'>
          <ul>
            <li><a href='' 
              className={activeReport === "Sales Report" ? 'active-report' : 'passive-report'} 
              onClick={(e) => {handleReport(e, "Sales Report") }}>
                Sales Report
              </a>
            </li>
            <li><a href='' 
              className={activeReport === "Excess Report" ? 'active-report' : 'passive-report'} 
              onClick={(e) => {handleReport(e, "Excess Report") }}>
                Excess Report
              </a>
            </li>
            <li><a href='' 
              className={activeReport === "Restock Report" ? 'active-report' : 'passive-report'} 
              onClick={(e) => {handleReport(e, "Restock Report") }}>
                Restock Report
              </a>
            </li>
            <li><a href='' 
              className={activeReport === "Sells Together" ? 'active-report' : 'passive-report'} 
              onClick={(e) => {handleReport(e, "Sells Together") }}>
                Sells Together
              </a>
            </li>
            <li><a href='' 
              className={activeReport === "Usage Chart" ? 'active-report' : 'passive-report'} 
              onClick={(e) => {handleReport(e, "Usage Chart") }}>
                Usage Chart
              </a>
            </li>
            <li><a href='' 
              className={activeReport === "Add Employee" ? 'active-report' : 'passive-report'} 
              onClick={(e) => {handleReport(e, "Add Employee") }}>
                Add Employee
              </a>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default ReportButtons;