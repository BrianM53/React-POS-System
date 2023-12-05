import React from "react";

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
