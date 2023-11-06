import React, { useState, useEffect } from 'react';

import './Manager.css';

import GenerateReport from './generateReport';
import ReportButtons from './reportButtons';
import ReportLabels from './reportLabels';
import LogoutButton from '../utility/logoutButton';


function Manager() {
  const [activeReport, setActiveReport] = useState(() => localStorage.getItem('activeReport') || 'Sales Report');

  useEffect(() => {
    // Check if there's an active report in local storage and set it
    localStorage.setItem('activeReport', activeReport);
  }, [activeReport]);

  function handleReport(e, reportType) {
    e.preventDefault();

    localStorage.setItem('activeReport', reportType);
    setActiveReport(reportType);

    GenerateReport('Sales Report');
  }

  return (
    <div>
      <div className='Manager'>
        <ReportLabels activeReport={activeReport} />
        <div className="main-content">
          <p>HEY</p>
        </div>
        <ReportButtons activeReport={activeReport} handleReport={handleReport} />

        <nav className='logout-btn'>
          <ul>
            <li><LogoutButton /></li>
          </ul>
        </nav>

      </div>
    </div>
  );
}

export default Manager;
