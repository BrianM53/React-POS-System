import React, { useState } from 'react';

/**
   * Adds a new row to the table with columns based on the current column count.
   * @function addRow
   * @memberof ReportContent
   */
const ReportContent = () => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState(0);

  /**
   * Adds a new row to the table with columns based on the current column count.
   * @function addRow
   * @memberof ReportContent
   */
  const addRow = () => {
    const newRow = Array.from({ length: cols }, (_, index) => `Column ${index + 1}`);
    setRows([...rows, newRow]);
  };

  /**
   * Handles the change in the number of columns.
   * @function handleColumnChange
   * @memberof ReportContent
   * @param {Object} event - The event object.
   */
  const handleColumnChange = (event) => {
    setCols(Number(event.target.value));
  };

  return (
    <div>
      <div className="table-container">
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((column, columnIndex) => (
                  <td key={columnIndex}>{column}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportContent;
