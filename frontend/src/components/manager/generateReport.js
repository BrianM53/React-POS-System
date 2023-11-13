function generateReport(reportType, data, setColumns, setTableData) {
  if (reportType === 'Sales Report') {
    setColumns(['product_name', 'price', 'numsold', 'totalsales']);
  } else if (reportType === 'Excess Report') {
    setColumns(['inventory_item', 'total_consumed', 'current_stock', 'past_stock', 'percent_sold']);

  } else if (reportType === 'Restock Report') {
    setColumns(['product_name1', 'inventory_item', 'stock_level', 'restock_level', 'measurement_type']);
    
  } else if (reportType === 'Sells Together') {
    setColumns(['product_name1', 'product_name2', 'frequency']);
  } else if (reportType === 'Usage Chart') {
    
  } else if (reportType === 'Add Employee') {
    
  }
  
  setTableData(data);

}
  
export default generateReport;
 