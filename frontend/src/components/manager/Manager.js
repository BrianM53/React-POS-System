import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import './Manager.css';
import "react-datepicker/dist/react-datepicker.css";

import generateReport from './generateReport';
import ReportButtons from './reportButtons';
import ReportLabels from './reportLabels';
import LogoutButton from '../utility/logoutButton';
import DatePicker from "react-datepicker";

function Manager() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [activeReport, setActiveReport] = useState(() => localStorage.getItem('activeReport') || 'Sales Report');

  useEffect(() => {
    // Check if there's an active report in local storage and set it
    localStorage.setItem('activeReport', activeReport);
  }, [activeReport]);

  function generateTimestamp(date) {
    const date_val = date.toISOString().slice(0, 10).replace("T", " ");
    const time_val = date.toLocaleTimeString([], { hour12: false }).slice(0, 8);
    return date_val + " " + time_val;
  }

  function handleReport(e, reportType) {
    e.preventDefault();

    localStorage.setItem('activeReport', reportType);
    setActiveReport(reportType);

    console.log(reportType, "\nStart date:", generateTimestamp(startDate));

    generateReport(reportType);
  }

  return (
    <div>
      <div className='Manager'>
        <ReportLabels activeReport={activeReport} />

        <div className="main-content">
        </div>

        <ReportButtons activeReport={activeReport} handleReport={handleReport} />

        <div className='date-btn'>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect timeFormat='HH:mm'/>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} showTimeSelect />
        </div>
          
        <div className='utility-btn'>
          <Button onClick={() => navigate('/cashier')}>Cashier Interface</Button>
          <LogoutButton />
        </div>

      </div>
    </div>
  );
}

export default Manager;
