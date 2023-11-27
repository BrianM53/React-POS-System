import React, { useState } from 'react';

const ReportContent = () => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState(0);

  const addRow = () => {
    const newRow = Array.from({ length: cols }, (_, index) => `Column ${index + 1}`);
    setRows([...rows, newRow]);
  };

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
