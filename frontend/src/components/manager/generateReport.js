function generateReport(reportType, data, setTableData) {
  if (reportType == 'Sales Report') {
    setTableData(data);

  } else if (reportType == 'Excess Report') {
    
  } else if (reportType == 'Restock Report') {
    setTableData(data); // sets for only things to restock
  } else if (reportType == 'What Sells Together') {

  } else if (reportType == 'Usage Chart') {

  } else if (reportType == 'Add Employee') {

  }
}
  
export default generateReport;
 