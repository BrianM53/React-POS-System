import React from "react";

/**
 * Renders a set of buttons for selecting different reports in the admin panel.
 * @function AdminReportButtons
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.activeReport - The currently active report type.
 * @param {Function} props.handleReport - Callback function triggered when a report button is clicked.
 * @returns {JSX.Element} - The JSX markup for the AdminReportButtons component.
 */
function AdminReportButtons({ activeReport, handleReport }) {
  return (
    <div className="report-btn">
      <nav>
        <ul>
          <li>
            <a
              href=""
              className={
                activeReport === "View Employees"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "View Employees");
              }}
            >
              View Employees
            </a>
          </li>
          <li>
            <a
              href=""
              className={
                activeReport === "View Managers"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "View Managers");
              }}
            >
              View Managers
            </a>
          </li>
          <li>
            <a
              href=""
              className={
                activeReport === "View Customers"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "View Customers");
              }}
            >
              View Customers
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminReportButtons;
