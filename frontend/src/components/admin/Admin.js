import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useUser } from "../utility/userControl";

import "./Admin.css";
import "react-datepicker/dist/react-datepicker.css";

//import generateReport from './generateReport';
import AdminReportButtons from "./adminReportButtons";
// import ReportLabels from "./reportLabels";
import LogoutButton from "../utility/logoutButton";
// import AddEmployee from "./adminAddEmployee";
// import SubmitEmployee from "../manager/submitEmployee";
// import EditEmployee from "../manager/editEmployee";
// import SubmitEditEmployee from "../manager/submitEditEmployee";
import AdminAddEmployee from "./adminAddEmployee";
import AdminSubmitEmployee from "./adminSubmitEmployee";
import AdminEditEmployee from "./adminEditEmployee";
import AdminSubmitEditEmployee from "./adminSubmitEditEmployee";

import AdminAddManager from "./adminAddManager";
import AdminSubmitManager from "./adminSubmitManager";
import AdminEditManager from "./adminEditManager";
import AdminSubmitEditManager from "./adminSubmitEditManager";

import AdminAddCustomer from "./adminAddCustomer";
import AdminSubmitCustomer from "./adminSubmitCustomer";
import AdminEditCustomer from "./adminEditCustomer";
import AdminSubmitEditCustomer from "./adminSubmitEditCustomer";

import AdminRemoveConfirmation from "./adminRemoveConfirmation";

/**
 * Sets states for forms
 * @function Admin - sets all values for arrays used for reports and headers
 */
function Admin() {
  const navigate = useNavigate();
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

  // default variables are for Sales Report
  const [activeReport, setActiveReport] = useState(
    () => localStorage.getItem("activeReport") || "View Employees"
  );
  const [columns, setColumns] = useState([
    "employee_id",
    "first_name",
    "last_name",
    "phone",
    "email",
    "username",
    "password",
  ]);

  const [tableData, setTableData] = useState([]);

  const [isFormOpen, setFormOpen] = useState(false);
  const [activeFormType, setActiveFormType] = useState(null);

  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [activeEditFormType, setActiveEditFormType] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const 
  {
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

  /**
 * put data in arrays based on the report type
 * @param {object} data - contains data from the query on the report
 * @param {object} reportType - Contains string of the report name
 * @function generateReport - sets data for the report
 */
  function generateReport(reportType, data) 
  {
    console.log(reportType);

    if (reportType === "View Employees") 
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
    } 
    else if (reportType === "View Managers") 
    {
      setColumns([
        "manager_id",
        "first_name",
        "last_name",
        "phone",
        "email",
        "username",
        "password",
      ]);
      setTableData(data);
    } 
    else if (reportType === "View Customers") 
    {
      setColumns([
        "customer_id",
        "first_name",
        "last_name",
        "phone",
        "email",
      ]);
      setTableData(data);
    }
  }

  /**
 * Handles requests for generating and displaying reports, updating activeReport state.
 * @function handleReport
 * @param {object} e - The request event.
 * @param {string} reportType - The type of report to be displayed.
 */
  function handleReport(e, reportType) 
  {
    if (e) {
      e.preventDefault();
    }

    setFormOpen(false);
    setActiveFormType(null);

    localStorage.setItem("activeReport", reportType);
    setActiveReport(reportType);

    let reportRoute = reportType.replace(" ", "-").toLowerCase();

    if (reportRoute === "view-employees") 
    {
    //   console.log("Fetching employee data...");

      axios
        .post(BACKEND_URL + "/adminemployees/" + reportRoute)
        .then((response) => {
        //   console.log("Backend response for " + reportType, response.data.data);
  
          const employeeData = response.data.data;
  
          const employeeColumns = Object.keys(employeeData[0]);
  
          setColumns(employeeColumns);
          setTableData(employeeData);
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    } 
    else if (reportRoute === "view-managers")
    {
    //   console.log("Fetching manager data...");

      axios
        .post(BACKEND_URL + "/adminmanagers/" + reportRoute)
        .then((response) => {
        //   console.log("Backend response for " + reportType, response.data.data);
  
          const managerData = response.data.data;
  
          const managerColumns = Object.keys(managerData[0]);
  
          setColumns(managerColumns);
          setTableData(managerData);
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    }
    else if (reportRoute === "view-customers")
    {
    //   console.log("Fetching customer data...");

      axios
        .post(BACKEND_URL + "/admincustomers/" + reportRoute)
        .then((response) => {
        //   console.log("Backend response for " + reportType, response.data.data);
  
          const customerData = response.data.data;
  
          const customerColumns = Object.keys(customerData[0]);
  
          setColumns(customerColumns);
          setTableData(customerData);
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    }
    else 
    {
      setColumns([]);
    }
  }

  /**
 * Handles the deletion of an element based on the active report type.
 * @function handleDelete
 * @param {object} element - The element to be deleted.
 */
  function handleDelete(element) 
  {
    // console.log("inside of handleDelete");
    const elementType = activeReport.toLowerCase().replace(/\s+/g, '');
    // console.log(elementType);
    // console.log(element);
    // console.log("after console.log(element");
    switch (elementType) 
    {
      case 'viewemployees':
        // console.log("inside of employees");
        axios
          .delete(BACKEND_URL + "/adminemployees/" + element.employee_id)
          .then(() => {
            console.log("Employee removed successfully");
            fetchAndRenderData();
          })
          .catch((error) => {
            console.error("Axios error:", error);
          });
        break;
      case 'viewmanagers':
        // console.log("inside of managers");
        axios
          .delete(BACKEND_URL + "/adminmanagers/" + element.manager_id)
          .then(() => {
            console.log("Manager removed successfully");
            fetchAndRenderData();
          })
          .catch((error) => {
            console.error("Axios error:", error);
          });
        break;
      case 'viewcustomers':
        // console.log("inside of customers");
        axios
          .delete(BACKEND_URL + "/admincustomers/" + element.customer_id) 
          .then(() => {
            console.log("Customer removed successfully");
            fetchAndRenderData();
          })
          .catch((error) => {
            console.error("Axios error:", error);
          });
        break;
      default:
        console.error(`Unknown element type`);
    }
  }

  /**
 * Handles the editing of an element based on the active report type.
 * @function handleEdit
 * @param {object} element - The element to be edited.
 */
  function handleEdit(element)
  {
    setEditFormOpen(true);
    setSelectedRowData(element);

    switch (activeReport.toLowerCase().replace(/\s+/g, '')) 
    {
      case 'viewemployees':
        setActiveEditFormType('editEmployee');
        break;
      case 'viewmanagers':
        setActiveEditFormType('editManager');
        break;
      case 'viewcustomers':
        setActiveEditFormType('editCustomer');
        break;
      default:
        console.error(`Unknown element type`);
    }
  } 

  /**
 * Handles the finish of the editing process, closing the edit form and triggering data refresh.
 * @function handleFinishEditing
 */
  const handleFinishEditing = () => {
    setEditFormOpen(false);
    setSelectedRowData(null);
    setActiveEditFormType(null);
    fetchAndRenderData();
  };

  /**
 * Handles the cancellation of editing, closing the form and resetting relevant states.
 * @function handleCancelEditing
 */
  const handleCancelEditing = () => {
    setFormOpen(false);
    setEditFormOpen(false);
    setSelectedRowData(null);
    setActiveFormType(null);
    setActiveEditFormType(null);
  }

  /**
 * Handles the click event when adding an employee, opening the add employee form.
 * @function handleAddEmployeeClicked
 */
  function handleAddEmployeeClicked() {
    // Open the form
    setFormOpen(true);
    setActiveFormType("addEmployee");
    // console.log("inside of the handle add employee clicked");
  }

  /**
 * Handles the finish of adding an employee, closing the form and triggering data refresh.
 * @function handleFinishAddingEmployee
 */
  function handleFinishAddingEmployee() {
    // Close the form
    setFormOpen(false);
    setActiveFormType(null);
    // console.log("handleFinishAddingEmployee");
    fetchAndRenderData();

  }

  /**
 * Handles the click event when adding a manager, opening the add manager form.
 * @function handleAddManagerClicked
 */
  function handleAddManagerClicked() {
    // Open the form
    setFormOpen(true);
    setActiveFormType("addManager");
    // console.log("inside of the handle add manager clicked");
  }

  /**
 * Handles the finish of adding a manager, closing the form and triggering data refresh.
 * @function handleFinishAddingManager
 */
  function handleFinishAddingManager() {
    // Close the form
    setFormOpen(false);
    setActiveFormType(null);
    // console.log("handleFinishAddingManager");
    fetchAndRenderData();
  }

  /**
 * Handles the click event when adding a customer, opening the add customer form.
 * @function handleAddCustomerClicked
 */
  function handleAddCustomerClicked() {
    // Open the form
    setFormOpen(true);
    setActiveFormType("addCustomer");
    // console.log("inside of the handle add customer clicked");

  }

  /**
 * Handles the finish of adding a customer, closing the form and triggering data refresh.
 * @function handleFinishAddingCustomer
 */
  function handleFinishAddingCustomer() {
    // Close the form
    setFormOpen(false);
    setActiveFormType(null);
    // console.log("handleFinishAddingCustomer");
    fetchAndRenderData();
  }

  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  /**
 * Opens the delete confirmation modal for the specified item.
 * @function openDeleteConfirmation
 * @param {object} item - The item for which the deletion confirmation is opened.
 */
  function openDeleteConfirmation(item) {
    setItemToDelete(item);
    setDeleteConfirmationOpen(true);
  }

  /**
 * Closes the delete confirmation modal.
 * @function closeDeleteConfirmation
 */
  function closeDeleteConfirmation() {
    setItemToDelete(null);
    setDeleteConfirmationOpen(false);
  }

  /**
 * Confirms the deletion of the item and triggers the deletion process.
 * @function confirmDelete
 */
  function confirmDelete() {
    if (itemToDelete) {
      handleDelete(itemToDelete);
      closeDeleteConfirmation(); //set item to delete back to null and close pop up
    }
  }

  const [tableDataKey, setTableDataKey] = useState(0);

  useEffect(() => {
    // Fetch data based on the active report, and update the state
    const fetchData = async () => {
      await handleReport(null, activeReport);
    };
  
    fetchData();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeReport, tableDataKey]);

  function fetchAndRenderData() {
    // Fetch data based on the active report, and update the state
    handleReport(null, activeReport);

    // Increment the key to trigger a re-render
    setTableDataKey((prevKey) => prevKey + 1);
  }



  return (
    <div className="manager-stage">
      <div className="left-panel">
        <div className="admin-header">
          <h1>Welcome,</h1>
        <div>{userName}</div>
        <div>{userEmail}</div>
        </div>

        <AdminReportButtons
          activeReport={activeReport}
          handleReport={handleReport}
        />

        <div className="admin-utility-btn">
          <LogoutButton onLogout={handleLogout} />
        </div>
      </div>
      <div className="main-manager">
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
          <div className="label-item">Edit</div>
          <div className="label-item">Remove</div>
        </div>

        <div
          className={
            activeReport === "View Managers"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">Manager ID</div>
          <div className="label-item">First Name</div>
          <div className="label-item">Last Name</div>
          <div className="label-item">Phone</div>
          <div className="label-item">Email</div>
          <div className="label-item">Username</div>
          <div className="label-item">Edit</div>
          <div className="label-item">Remove</div>
        </div>

        <div
          className={
            activeReport === "View Customers"
              ? "label-container"
              : "passive-label"
          }
        >
          <div className="label-item">Customer ID</div>
          <div className="label-item">First Name</div>
          <div className="label-item">Last Name</div>
          <div className="label-item">Phone</div>
          <div className="label-item">Email</div>
        </div>

        <div className="main-content">
          {isFormOpen && activeFormType === "addEmployee" && (
            <AdminAddEmployee onFinishAddingEmployee={handleFinishAddingEmployee}
            handleCancelEditing={handleCancelEditing} />
          )}

          {isFormOpen && activeFormType === "addManager" && (
            <AdminAddManager onFinishAddingManager={handleFinishAddingManager}
            handleCancelEditing={handleCancelEditing} />
          )}

          {isFormOpen && activeFormType === "addCustomer" && (
            <AdminAddCustomer onFinishAddingCustomer={handleFinishAddingCustomer}
            handleCancelEditing={handleCancelEditing} />
          )}

          {isEditFormOpen && selectedRowData && activeEditFormType === 'editEmployee' && (
            <AdminEditEmployee
              selectedRowData={selectedRowData}
              handleFinishEditing={handleFinishEditing}
              handleCancelEditing={handleCancelEditing}
            />
          )}

          {isEditFormOpen && selectedRowData && activeEditFormType === 'editManager' && (
            <AdminEditManager
              selectedRowData={selectedRowData}
              handleFinishEditing={handleFinishEditing}
              handleCancelEditing={handleCancelEditing}
            />
          )}

          {isEditFormOpen && selectedRowData && activeEditFormType === 'editCustomer' && (
            <AdminEditCustomer
              selectedRowData={selectedRowData}
              handleFinishEditing={handleFinishEditing}
              handleCancelEditing={handleCancelEditing}
            />
          )} 

          {isDeleteConfirmationOpen && (
            <AdminRemoveConfirmation onConfirm={confirmDelete} onCancel={closeDeleteConfirmation} />
          )}

          {!isFormOpen && !isEditFormOpen && !isDeleteConfirmationOpen && (
            <table className="main-content-table">
              <thead className="content-head"></thead>
              {activeReport === "View Employees" ? (
                <tbody>
                {tableData.map((element, index) => (
                  <tr key={index}>
                    {columns.map((column, columnIndex) => (
                      // Check if the column is 'password'; if yes, don't render it
                      column !== 'password' && (
                        <td key={columnIndex}>{element[column]}</td>
                      )
                    ))}
                    <td>
                      <button onClick={() => handleEdit(element)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => openDeleteConfirmation(element)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              
              ) : activeReport === "View Managers" ? (
                <tbody>
                  {tableData.map((element, index) => (
                    <tr key={index}>
                      {columns.map((column, columnIndex) => (
                        // Check if the column is 'password'; if yes, don't render it
                        column !== 'password' && (
                          <td key={columnIndex}>{element[column]}</td>
                        )
                      ))}
                      <td>
                        <button onClick={() => handleEdit(element)}>Edit</button>
                      </td>
                      <td>
                        <button onClick={() => openDeleteConfirmation(element)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              ) : activeReport === "View Customers" ? (
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
                        <button onClick={() => openDeleteConfirmation(element)}>Remove</button>
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

          {(activeReport === "View Managers") && (
            <div className="label-item2">
              <div className="label-item-button2" onClick={handleAddManagerClicked}>
                Add a Manager
              </div>
            </div>
          )}

          {(activeReport === "View Customers") && (
            <div className="label-item2">
              <div className="label-item-button2" onClick={handleAddCustomerClicked}>
                Add a Customer
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Admin;
