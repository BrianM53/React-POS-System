import axios from 'axios';

function generateTimestamp(date) {
  const date_val = date.toISOString().slice(0, 10).replace("T", " ");
  const time_val = date.toLocaleTimeString([], { hour12: false }).slice(0, 8);
  return date_val + " " + time_val;
}

export function handleReport(reportType, startDate, endDate, generateReport, setActiveReport) {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

  let reportRoute = reportType.replace(" ", "-").toLowerCase();

  axios
    .post(BACKEND_URL + '/reports/' + reportRoute, {
      startDate: generateTimestamp(startDate),
      endDate: generateTimestamp(endDate),
    })
    .then(response => {
      console.log(reportType, "data for \nStart date:", generateTimestamp(startDate), "\nEnd date:", generateTimestamp(endDate), response.data.data);
      generateReport(response.data.data);
      localStorage.setItem('activeReport', reportType);
      setActiveReport(reportType);
    })
    .catch(error => {
      console.error('axios error:', error);
    });
}
