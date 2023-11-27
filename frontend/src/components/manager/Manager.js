import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import axios from 'axios';

import './Manager.css';
import "react-datepicker/dist/react-datepicker.css";

// import generateReport from './generateReport';
import ReportButtons from './reportButtons';
import ReportLabels from './reportLabels';
import LogoutButton from '../utility/logoutButton';

function Manager() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  // default variables are for Sales Report
  const [activeReport, setActiveReport] = useState(() => localStorage.getItem('activeReport') || 'Sales Report');
  const [columns, setColumns] = useState(['product_name', 'price', 'numsold', 'totalsales']);

  // the report data that will show up in the main content box
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Check if there's an active report in local storage and set it
    localStorage.setItem('activeReport', activeReport);
  }, [activeReport]);

  function generateTimestamp(date) {
    const date_val = date.toISOString().slice(0, 10).replace("T", " ");
    const time_val = date.toLocaleTimeString([], { hour12: false }).slice(0, 8);
    return date_val + " " + time_val;
  }

  function generateReport(reportType, data, setColumns) {
    if (reportType === 'Sales Report') {
      setColumns(['product_name', 'price', 'numsold', 'totalsales']);
  
  
    } else if (reportType === 'Excess Report') {
      setColumns(['inventory_item', 'total_consumed', 'current_stock', 'past_stock', 'percent_sold']);
  
  
    } else if (reportType === 'Restock Report') {
      setColumns(['inventory_item', 'stock_level', 'restock_level', 'measurement_type']);
  
      
    } else if (reportType === 'Sells Together') {
      setColumns(['product_name1', 'product_name2', 'frequency']);
  
  
    } else if (reportType === 'Usage Chart') {
      
    } else if (reportType === 'Add Employee') {
      
    }
    
  }

  function handleReport(e, reportType) {
    e.preventDefault();

    localStorage.setItem('activeReport', reportType);
    setActiveReport(reportType);

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    let reportRoute = reportType.replace(" ", "-").toLowerCase();
    
    axios
      .post(BACKEND_URL + '/reports/' + reportRoute, {
        startDate: generateTimestamp(startDate),
        endDate: generateTimestamp(endDate),
      })
      .then(response => {
        console.log(reportType, "data for \nStart date:", generateTimestamp(startDate), "\nEnd date:", generateTimestamp(endDate), "\n", response.data.data); 
        generateReport(reportType, response.data.data, setColumns);
      })
      .catch(error => {
        console.error('axios error:', error);
      });
  }

  return (
    <div>
      <div className='Manager'>
        <ReportLabels activeReport={activeReport} />

        <div className="main-content">
          <table>
            <thead className='content-head'> 
            </thead>
            <tbody>
              {tableData.map((element, index) => (
                <tr key={index}>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>{element[column]}</td>
                  ))}
                </tr>
              ))} 
            </tbody>
          </table>
        </div>

        <ReportButtons activeReport={activeReport} handleReport={handleReport} />

        <div className='date-btn'>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect timeFormat='HH:mm'/>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} showTimeSelect timeFormat='HH:mm'/>
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