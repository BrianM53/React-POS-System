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
import AddMenuItem from "./addMenuItem";
import AddInventoryItem from "./addInventoryItem";
import EditEmployee from "./editEmployee";
import EditMenuItem from "./editMenuItem";
import EditInventoryItem from "./editInventoryItem";

import { CChart } from "@coreui/react-chartjs";

function Manager() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [isAddEmployeeClicked, setAddEmployeeClicked] = useState(false);
  // const [isAddMenuItemClicked, setAddMenuItemClicked] = useState(false);
  // const [isAddInventoryItemClicked, setAddInventoryItemClicked] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [activeFormType, setActiveFormType] = useState(null);


  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [activeEditFormType, setActiveEditFormType] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);


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
        "password",
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
    else if (reportType === "View Menu Items") 
    {
      setColumns([
        "product_id",
        "product_name",
        "price",
        "category",
        "product_description"
      ]);
      setTableData(data);
      setShowChart(false);
    } 
    else if (reportType === "View Inventory Items")
    {
      setColumns([
        "inventory_id",
        "inventory_item",
        "stock_level",
        "restock_level",
        "measurement_type",
        "price"
      ]);
      setTableData(data);
      setShowChart(false);
    }
  }

  function handleReport(e, reportType) 
  {
    e.preventDefault();

    setFormOpen(false);
    setActiveFormType(null);
  
    localStorage.setItem("activeReport", reportType);
    setActiveReport(reportType);
  
    let reportRoute = reportType.replace(/\s+/g, "-").toLowerCase();
    console.log(reportRoute);
  
    if (reportRoute === "view-menu-items") 
    {
      console.log("Fetching menu items data...");
  
      // no dates
  
      axios
        .post(BACKEND_URL + "/reports/" + reportRoute)
        .then((response) => {
          console.log("Backend response for " + reportType, response.data.data);
  
          const menuItemsData = response.data.data;
  
          const menuItemsColumns = Object.keys(menuItemsData[0]);
  
          setColumns(menuItemsColumns);
          setTableData(menuItemsData);
          setShowChart(false);
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    } 
    else if (reportRoute === "view-employees") 
    {
      console.log("Fetching employee data...");
  
      // no dates
  
      axios
        .post(BACKEND_URL + "/reports/" + reportRoute)
        .then((response) => {
          console.log("Backend response for " + reportType, response.data.data);
  
          const employeeData = response.data.data;
  
          const employeeColumns = Object.keys(employeeData[0]);
  
          setColumns(employeeColumns);
          setTableData(employeeData);
          setShowChart(false);
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    } 
    else if (reportRoute === "view-inventory-items") 
    {
      console.log("Fetching inventory item data...");
  
      // no dates
  
      axios
        .post(BACKEND_URL + "/reports/" + reportRoute)
        .then((response) => {
          console.log("Backend response for " + reportType, response.data.data);
  
          const inventoryItemsData = response.data.data;
  
          const employeeColumns = Object.keys(inventoryItemsData[0]);
  
          setColumns(employeeColumns);
          setTableData(inventoryItemsData);
          setShowChart(false);
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    } 
    else 
    {
      // Default branch
      axios
        .post(BACKEND_URL + "/reports/" + reportRoute, {
          startDate: generateTimestamp(startDate),
          endDate: generateTimestamp(endDate),
          employeeId: employeeId,
        })
        .then((response) => {
          console.log("Backend response for " + reportType, response.data.data);
          generateReport(reportType, response.data.data);
  
          // TESTING
          if (reportType === "Usage Chart") {
            setShowChart(true);
            setChartData(response.data.data);
  
            console.log("chartData:", chartData); // TODO Check data sent to chart
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
  }

  function handleDelete(element) 
  {
    console.log("inside of handleDelete");
    const elementType = activeReport.toLowerCase().replace(/\s+/g, '');
    console.log(elementType);
    console.log(element);
    console.log("after console.log(element");
    switch (elementType) 
    {
      case 'viewemployees':
        console.log("inside of viewemployees");
        axios
          .delete(BACKEND_URL + "/employees/" + element.employee_id)
          .then(() => {
            console.log("Employee removed successfully");
          })
          .catch((error) => {
            console.error("Axios error:", error);
          });
        break;
      case 'viewmenuitems':
        console.log("inside of viewmenuitems");
        axios
          .delete(BACKEND_URL + "/addproducts/" + element.product_id)
          .then(() => {
            console.log("Menu item removed successfully");
          })
          .catch((error) => {
            console.error("Axios error:", error);
          });
        break;
      case 'viewinventoryitems':
        console.log("inside of inventoryitems");
        axios
          .delete(BACKEND_URL + "/inventory/" + element.inventory_id)
          .then(() => {
            console.log("Inventory item removed successfully");
          })
          .catch((error) => {
            console.error("Axios error:", error);
          });
        break;
      default:
        console.error(`Unknown element type: ${elementType}`);
    }
  }

  function handleEdit(element)
  {
    setEditFormOpen(true);
    setSelectedRowData(element);

    switch (activeReport.toLowerCase().replace(/\s+/g, '')) 
    {
      case 'viewemployees':
        setActiveEditFormType('editEmployee');
        break;
      case 'viewmenuitems':
        setActiveEditFormType('editMenuItem');
        break;
      case 'viewinventoryitems':
        setActiveEditFormType('editInventoryItem');
        break;
      default:
        console.error(`Unknown element type`);
    }
  } 
  const handleFinishEditing = () => {
    setEditFormOpen(false);
    setSelectedRowData(null);
    setActiveEditFormType(null);
  };

  const handleCancelEditing = () => {
    setFormOpen(false);
    setEditFormOpen(false);
    setSelectedRowData(null);
    setActiveFormType(null);
    setActiveEditFormType(null);
  }


  function handleAddEmployeeClicked() {
    // Open the form
    setFormOpen(true);
    setActiveFormType("addEmployee");
    console.log("inside of the handle add employee clicked");
    // setAddEmployeeClicked(true);
  }

  function handleFinishAddingEmployee() {
    // Close the form
    setFormOpen(false);
    setActiveFormType(null);
    // setAddEmployeeClicked(false);
    console.log("handleFinishAddingEmployee");

  }

  function handleAddMenuItemClicked() {
    // Open the form
    setFormOpen(true);
    setActiveFormType("addMenuItem");
    // setAddMenuItemClicked(true);
    console.log("inside of the handle add menu item clicked");
  }

  function handleFinishAddingMenuItem() {
    // Close the form
    setFormOpen(false);
    setActiveFormType(null);
    console.log("handleFinishAddingMenuItem");
    // setAddMenuItemClicked(false);
  }

  function handleAddInventoryItemClicked() {
    // Open the form
    setFormOpen(true);
    setActiveFormType("addInventoryItem");
    // setAddInventoryItemClicked(true);
    console.log("inside of the handle add inventory item clicked");

  }

  function handleFinishAddingInventoryItem() {
    // Close the form
    setFormOpen(false);
    setActiveFormType(null);
    // setAddInventoryItemClicked(false);
    console.log("handleFinishAddingInventoryItem");
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
        {/* ================ AHHHH MY EYESSSS THEY'RE BLEEDING AT THIS MESS YOU'VE MADE AHHHH *dies* ================== */}
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
          <div className="label-item">Employee ID</div>
          <div className="label-item">First Name</div>
          <div className="label-item">Last Name</div>
          <div className="label-item">Phone</div>
          <div className="label-item">Email</div>
          <div className="label-item">Username</div>
          <div className="label-item">Password</div>
          <div className="label-item">Edit</div>
          <div className="label-item">Remove</div>

        </div>
        <div
          className={
            activeReport === "View Menu Items"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">Product ID</div>
          <div className="label-item">Product Name</div>
          <div className="label-item">Price</div>
          <div className="label-item">Cateogry</div>
          <div className="label-item">Description</div>
          <div className="label-item">Edit</div>
          <div className="label-item">Remove</div>
        </div>

        <div
          className={
            activeReport === "View Inventory Items"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">Inventory ID</div>
          <div className="label-item">Item Name</div>
          <div className="label-item">Stock Level</div>
          <div className="label-item">Restock Level</div>
          <div className="label-item">Measuring Type</div>
          <div className="label-item">Price</div>
          <div className="label-item">Edit</div>
          <div className="label-item">Remove</div>
        </div>

        <div className="main-content">
          {isFormOpen && activeFormType === "addEmployee" && (
            <AddEmployee onFinishAddingEmployee={handleFinishAddingEmployee}
            handleCancelEditing={handleCancelEditing} />
          )}

          {isFormOpen && activeFormType === "addMenuItem" && (
            <AddMenuItem onFinishAddingMenuItem={handleFinishAddingMenuItem}
            handleCancelEditing={handleCancelEditing} />
          )}

          {isFormOpen && activeFormType === "addInventoryItem" && (
            <AddInventoryItem onFinishAddingInventoryItem={handleFinishAddingInventoryItem}
            handleCancelEditing={handleCancelEditing} />
          )}

          {isEditFormOpen && selectedRowData && activeEditFormType === 'editEmployee' && (
            <EditEmployee
              selectedRowData={selectedRowData}
              handleFinishEditing={handleFinishEditing}
              handleCancelEditing={handleCancelEditing}
            />
          )}

          {isEditFormOpen && selectedRowData && activeEditFormType === 'editMenuItem' && (
            <EditMenuItem
              selectedRowData={selectedRowData}
              handleFinishEditing={handleFinishEditing}
              handleCancelEditing={handleCancelEditing}
            />
          )}

          {isEditFormOpen && selectedRowData && activeEditFormType === 'editInventoryItem' && (
            <EditInventoryItem
              selectedRowData={selectedRowData}
              handleFinishEditing={handleFinishEditing}
              handleCancelEditing={handleCancelEditing}
            />
          )} 

          {!isFormOpen && !isEditFormOpen && (
            <table className="main-content-table">
              <thead className="content-head"></thead>
              {activeReport === "View Employees" ? (
                <tbody>
                  {tableData.map((element, index) => (
                    <tr key={index}>
                      {columns.map((column, columnIndex) => (
                        <td key={columnIndex}>{element[column]}</td>
                      ))}
                      <td>
                        <button onClick={() => handleEdit(element)}>Edit</button>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(element)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : activeReport === "View Menu Items" ? (
                <tbody>
                  {tableData.map((element, index) => (
                    <tr key={index}>
                      {columns.map((column, columnIndex) => (
                        <td key={columnIndex}>{element[column]}</td>
                      ))}
                      <td>
                        <button onClick={() => handleEdit(element)}>Edit</button>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(element)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : activeReport === "View Inventory Items" ? (
                <tbody>
                  {tableData.map((element, index) => (
                    <tr key={index}>
                      {columns.map((column, columnIndex) => (
                        <td key={columnIndex}>{element[column]}</td>
                      ))}
                      <td>
                        <button onClick={() => handleEdit(element)}>Edit</button>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(element)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  {tableData.map((element, index) => (
                    <tr key={index}>
                      {columns.map((column, columnIndex) => (
                        <td key={columnIndex}>{element[column]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          )}
        </div>

         {(activeReport === "View Employees") && (
            <div className="label-item2">
              <div className="label-item-button2" onClick={handleAddEmployeeClicked}>
                Add an Employee
              </div>
            </div>
          )}

          {(activeReport === "View Menu Items") && (
            <div className="label-item2">
              <div className="label-item-button2" onClick={handleAddMenuItemClicked}>
                Add a Menu Item
              </div>
            </div>
          )}

          {(activeReport === "View Inventory Items") && (
            <div className="label-item2">
              <div className="label-item-button2" onClick={handleAddInventoryItemClicked}>
                Add an Inventory Item
              </div>
            </div>
          )}

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

        {activeReport !== "View Employees" && activeReport !== "View Menu Items" && activeReport !== "View Inventory Items" && (
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
