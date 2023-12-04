import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import axios from "axios";
import { useUser } from "../utility/userControl";

import "./Manager.css";
import "react-datepicker/dist/react-datepicker.css";

//import generateReport from './generateReport';
import ReportButtons from "./reportButtons";
// import ReportLabels from "./reportLabels";
import LogoutButton from "../utility/logoutButton";
import AddEmployee from "./addEmployee";
import { CChart } from "@coreui/react-chartjs";

function Manager() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

  // default variables are for Sales Report
  const [activeReport, setActiveReport] = useState(
    () => localStorage.getItem("activeReport") || "Sales Report"
  );
  const [columns, setColumns] = useState([
    "product_name1",
    "product_name2",
    "price",
    "numsold",
    "totalsales",
  ]);

  // the report data that will show up in the main content box
  const [tableData, setTableData] = useState([]); 
  const [chartData, setChartData] = useState([])
  const [showChart, setShowChart] = useState(false);
  // user variables
  const {
    userRole,
    setUserRole,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    handleLogout,
    employeeId,
  } = useUser();

  useEffect(() => {
    // Check if there's an active report in local storage and set it
    localStorage.setItem("activeReport", activeReport);
  }, [activeReport]);

  function generateTimestamp(date) {
    const date_val = date.toISOString().slice(0, 10).replace("T", " ");
    const time_val = date.toLocaleTimeString([], { hour12: false }).slice(0, 8);
    return date_val + " " + time_val;
  }

  function generateReport(reportType, data) {
    console.log(reportType);
    if (reportType === "Sales Report") {
      setColumns(["product_name", "price", "numsold", "totalsales"]);
      setTableData(data);
      setShowChart(false);
    } else if (reportType === "Excess Report") {
      for (let i = 0; i < data.length; i++) {
        data[i].total_consumed = Math.round(data[i].total_consumed * 100) / 100;
        data[i].percent_sold = Math.round(data[i].percent_sold * 100) / 100;
      }
      setColumns([
        "inventory_item",
        "total_consumed",
        "current_stock",
        "past_stock",
        "percent_sold",
      ]);
      setTableData(data);
      setShowChart(false);
    } else if (reportType === "Restock Report") {
      setColumns([
        "product_name",
        "inventory_item",
        "stock_level",
        "restock_level",
        "measurement_type",
      ]);
      setTableData(data);
      setShowChart(false);
    } else if (reportType === "Sells Together") {
      setColumns(["product_name1", "product_name2", "frequency"]);
      setTableData(data);
      setShowChart(false);
    } 
    // else if (reportType === 'Usage Chart') {
      
    // } 
    else if (reportType === 'Add Employee') {
      setColumns([]);
    }
    //______________________________
    // if (reportType === 'Usage Chart') {
    //   setShowChart(true);
    //   setChartData(data);
    // } 
    else {
      setShowChart(false);
      setTableData(data);
    }
    //_____________________________
  }

  function handleReport(e, reportType) {
    e.preventDefault();

    localStorage.setItem("activeReport", reportType);
    setActiveReport(reportType);

    const reportRoute = reportType.replace(" ", "-").toLowerCase();

    if (reportRoute !== "add-employee") {
    let reportRoute = reportType.replace(" ", "-").toLowerCase();

    if (reportRoute !== "add-employee") {
      axios
        .post(BACKEND_URL + "/reports/" + reportRoute, {
          startDate: generateTimestamp(startDate),
          endDate: generateTimestamp(endDate),
          employeeId: employeeId,
        })
        .then((response) => {
          console.log("Backend response for " + reportType, response.data.data);
          generateReport(reportType, response.data.data);
        })
        .catch((error) => {
          console.error("axios error:", error);
        });
    } else {
      setColumns([]);
    }
  }

  return (
    <div className="manager-stage">
      <div className="left-panel">
        <div className="header">
          <h2>Reports</h2>
        </div>
        <div>{userName}</div>
        <div>{userEmail}</div>

        <ReportButtons
          activeReport={activeReport}
          handleReport={handleReport}
        />

        <div className="utility-btn">
          <Button onClick={() => navigate("/cashier")}>
            Cashier Interface
          </Button>
          <LogoutButton onLogout={handleLogout} />
        </div>
      </div>
      <div className="main-manager">
        {/* ================ SORRY FOR THIS MESS, COULDN'T FORMAT IT CORRECTLY AS A COMPONENT ================== */}
        <div
          className={
            activeReport === "Sales Report"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">Menu Item</div>
          <div className="label-item">Price</div>
          <div className="label-item">Amount Sold</div>
          <div className="label-item">Total sales</div>
        </div>
        <div
          className={
            activeReport === "Excess Report"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">Ingredient</div>
          <div className="label-item">Total Consumed</div>
          <div className="label-item">Current Stock</div>
          <div className="label-item">Past Stock</div>
          <div className="label-item">% Sold</div>
        </div>
        <div
          className={
            activeReport === "Restock Report"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">Menu Item</div>
          <div className="label-item">Ingredient</div>
          <div className="label-item">Stock Level</div>
          <div className="label-item">Restock Level</div>
          <div className="label-item">Measurement Type</div>
        </div>
        <div
          className={
            activeReport === "Sells Together"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">First Menu Item</div>
          <div className="label-item">Second Menu Item</div>
          <div className="label-item">Sold Together</div>
        </div>
        <div
          className={
            activeReport === "Usage Chart" ? "label-container" : "passive-label"
          }
        >
          <div className="label-item">Amount of Ingredients Used</div>
        </div>
        <div
          className={
            activeReport === "Add Employee"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">Add an Employee</div>
        </div>

        <div className="main-content">
          <table className="main-content-table">
            <thead className="content-head"></thead>
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
          <div>{activeReport === "Add Employee" ? <AddEmployee /> : null}</div>
        </div>

        {/* TESTING */}
        {showChart ? (
          <CChart
            type="bar"
            data={chartData}
            data={{
              labels: chartData.map(item => item.inventoryItem),
              datasets: [
                {
                  label: "Usage Chart",
                  backgroundColor: "#ff0000",
                  data: chartData.map(item => item.amountUsed),
                },
              ],
            }}
            labels="Inventory Items"
            options={{
              scales: {
                x: { title: { display: true, text: "Inventory Item" } },
                y: { title: { display: true, text: "Amount Used" } },
              },
            }}
          />
        ) : (
          <table className="main-content-table">
            <thead className="content-head"></thead>
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
        )}

        <div className="date-btn">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
          />
        </div>
      </div>
    </div>
  );
}

export default Manager;
