import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu'; // Assuming your menu component is named Menu
import { useNavigate } from 'react-router-dom';
import './App.css';
import sweetParisLocation from './images/sweetParisLocation.jpeg'; // Import your image

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;