function generateReport(reportType, data, setColumns, setTableData) {
  if (reportType === 'Sales Report') {
    setColumns(['product_name', 'price', 'numsold', 'totalsales']);


  } else if (reportType === 'Excess Report') {
    setColumns(['inventory_item', 'total_consumed', 'current_stock', 'past_stock', 'percent_sold']);


  } else if (reportType === 'Restock Report') {
    setColumns(['inventory_item', 'stock_level', 'restock_level', 'measurement_type']);

    
  } else if (reportType === 'Sells Together') {
    setColumns(['product_name1', 'product_name2', 'frequency']);


  } else if (reportType === 'Usage Chart') {
    renderUsageChart(data);
    setColumns([]);
    setTableData([]);

    
  } else if (reportType === 'Add Employee') {
    
  }
  
  function renderUsageChart(data) {
    // Extract labels and amounts from the data
    const labels = data.map((item) => item.inventoryItem);
    const amounts = data.map((item) => item.amountUsed);
  
    // Get the canvas element with the id "usageChart"
    const ctx = document.getElementById('usageChart').getContext('2d');
  
    // Create a bar chart using Chart.js
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Inventory items used',
            data: amounts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Inventory Item',
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Amount',
            },
          },
        },
      },
    });
  }

}
  
export default generateReport;

//=======================   Rounding loop for the data ==========================
// for(let i = 0; i<data.size(); i++){
//   data[i].total_consumed = data[i].total_consumed.toFixed(2);
// }
 