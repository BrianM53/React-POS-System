import React from "react";

/**
 * Component for rendering navigation buttons for different reports.
 * @component
 * @function ReportButtons
 * @param {Object} props - The component props.
 * @param {string} props.activeReport - The currently active report.
 * @param {Function} props.handleReport - Callback function for handling report selection.
 * @returns {JSX.Element} - Rendered component.
 */
function ReportButtons({ activeReport, handleReport }) {
  return (
    <div className="report-btn">
      <nav>
        <ul>
          <li>
            <a
              href=""
              className={
                activeReport === "Sales Report"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "Sales Report");
              }}
            >
              Sales Report
            </a>
          </li>
          <li>
            <a
              href=""
              className={
                activeReport === "Excess Report"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "Excess Report");
              }}
            >
              Excess Report
            </a>
          </li>
          <li>
            <a
              href=""
              className={
                activeReport === "Restock Report"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "Restock Report");
              }}
            >
              Restock Report
            </a>
          </li>
          <li>
            <a
              href=""
              className={
                activeReport === "Sells Together"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "Sells Together");
              }}
            >
              Sells Together
            </a>
          </li>
          <li>
            <a
              href=""
              className={
                activeReport === "Usage Chart"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "Usage Chart");
              }}
            >
              Usage Chart
            </a>
          </li>
          <li>
            <a
              href=""
              className={
                activeReport === "View Orders"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "View Orders");
              }}
            >
              View Orders
            </a>
          </li>
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
                activeReport === "View Menu Items"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "View Menu Items");
              }}
            >
              View Menu Items
            </a>
          </li>
          <li>
            <a
              href=""
              className={
                activeReport === "View Inventory Items"
                  ? "active-report"
                  : "passive-report"
              }
              onClick={(e) => {
                handleReport(e, "View Inventory Items");
              }}
            >
              View Inventory Items
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ReportButtons;
