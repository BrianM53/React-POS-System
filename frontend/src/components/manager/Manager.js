import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useUser } from "../utility/userControl";

import "./Manager.css";
import "react-datepicker/dist/react-datepicker.css";

//import generateReport from './generateReport';
import ReportButtons from "./reportButtons";
import ReportLabels from "./reportLabels";
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

  const [tableData, setTableData] = useState([]);
  const [chartData, setChartData] = useState([]);
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

  function generateReport(reportType, data) 
  {
    console.log(reportType);
    if (reportType === "Sales Report") 
    {
      setColumns(["product_name", "price", "numsold", "totalsales"]);
      setTableData(data);
      setShowChart(false);
    } 
    else if (reportType === "Excess Report") 
    {
      for (let i = 0; i < data.length; i++) 
      {
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
    } 
    else if (reportType === "Restock Report") 
    {
      setColumns([
        "product_name",
        "inventory_item",
        "stock_level",
        "restock_level",
        "measurement_type",
      ]);
      setTableData(data);
      setShowChart(false);
    } 
    else if (reportType === "Sells Together") 
    {
      setColumns(["product_name1", "product_name2", "frequency"]);
      setTableData(data);
      setShowChart(false);
    } 
    else if (reportType === "View Employees") 
    {
      setColumns([
        "employee_id",
        "first_name",
        "last_name",
        "phone",
        "email",
        "username",
        "password"
      ]);
      setTableData(data);
      setShowChart(false);
    } 
    else if (reportType === "View Orders") 
    {
      setColumns([
        "Order ID",
        "Date & Time",
        "Total Cost",
        "Product ID",
        "Quantity",
      ]);
      setTableData(
        data.map((order) => ({
          "Order ID": order.order_id,
          "Date & Time": new Date(order.date_time).toLocaleString(),
          "Total Cost": order.total_cost,
          "Product ID": order.product_id,
          Quantity: order.quantity,
        }))
      );
    } 
    else if (reportType === "Usage Chart") 
    {

    }
  }

  function handleReport(e, reportType) {
    e.preventDefault();

    localStorage.setItem("activeReport", reportType);
    setActiveReport(reportType);

    //reportType = "View Employees" since handleReport(e, "View Employees")

    let reportRoute = reportType.replace(" ", "-").toLowerCase();
    console.log(reportRoute);

    if (reportRoute !== "view-employees") 
    {
      axios
        .post(BACKEND_URL + "/reports/" + reportRoute, {
          startDate: generateTimestamp(startDate),
          endDate: generateTimestamp(endDate),
          employeeId: employeeId,
        })
        .then((response) => {
          console.log("Backend response for " + reportType, response.data.data);
          generateReport(reportType, response.data.data);

          //TESTING
          if (reportType === "Usage Chart") {
            setShowChart(true);
            setChartData(response.data.data);

            console.log("chartData:", chartData); //TODO Check data sent to chart
          } else {
            setShowChart(false);
            generateReport(reportType);
            setTableData(response.data.data);
          }
        })

        .catch((error) => {
          console.error("axios error:", error);
        });
    } 
    else if (reportRoute === "view-employees") 
    {
      console.log("Fetching employee data...");
    
      axios
        .post(BACKEND_URL + "/reports/" + reportRoute)
        .then((response) => {
          console.log("Backend response for " + reportType, response.data.data);
    
          // Assuming the backend sends an array of employee objects
          const employeeData = response.data.data;
    
          // Set columns based on the keys of the first employee (assuming all employees have the same structure)
          const employeeColumns = Object.keys(employeeData[0]);
    
          // Set columns
          setColumns(employeeColumns);
    
          // Set table data with employee data
          setTableData(employeeData);
    
          // Assuming there's no chart for employee view
          setShowChart(false);
        })
        .catch((error) => {
          console.error("Axios error:", error);
          // Handle the error, e.g., show an error message to the user
        });
    }
  }

  return (
    <div className="manager-stage">
      <div className="left-panel">
        <div className="header">
          <h2>Welcome,</h2>
          <div>{userName}</div>
          <div>{userEmail}</div>
        </div>

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
            activeReport === "View Employees"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">
            <div className="label-item-button">Add an Employee</div>
          </div>
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
          {/* <div>{activeReport === "View Employees" ? <AddEmployee /> : null}</div> */}
        </div>

        {/* TESTING */}
        {showChart && (
          <CChart
            type="bar"
            data={{
              labels: chartData,
              datasets: [
                {
                  label: "Usage Chart",
                  backgroundColor: "#ff0000",
                  data: chartData,
                },
              ],
            }}
            labels="Inventory Items"
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "#00ffff",
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    color: "#00ff00",
                  },
                  ticks: {
                    color: "#0000ff",
                  },
                },
                y: {
                  grid: {
                    color: "#ffcccc",
                  },
                  ticks: {
                    color: "#000000",
                  },
                },
              },
            }}
          />
        )}

        {activeReport !== "View Employees" && (
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
        )}
      </div>
    </div>
  );
}

export default Manager;
