// Define your function to generate reports
function generateReport(reportType) {
    // Check the report type and generate the corresponding report
    if (reportType == 'Sales Report') {
      // Generate Sales Report
      console.log('Generating Sales Report');

    } else if (reportType == 'Excess Report') {
      // Generate Excess Report
      console.log('Generating Excess Report');

    } else if (reportType == 'Restock Report') {
      // Generate Restock Report
      console.log('Generating Restock Report');

    } else if (reportType == 'Sells Together') {
      // Generate Sells Together Report
      console.log('Generating Sells Together Report');

    } else if (reportType == 'Usage Chart') {
      // Generate Usage Chart
      console.log('Generating Usage Chart');

    } else if (reportType == 'Add Employee') {
      // Add Employee (You may need a different function for this)
      console.log('Adding Employee');

    } else {
      console.log('Unknown report type: ' + reportType);
    }
  }
  
  export default generateReport;
 