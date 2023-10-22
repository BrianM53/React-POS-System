import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './utility/reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

// the page components
import App from './App';
import Login from './components/login/Login'
import Menu from './components/menu/Menu'

// create a Routing component to allow
// switching between multiple pages 
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* creating the routes for the components */}
        <Route exact path="/" element={<App />} />   
        <Route exact path="/login" element={<Login />} />   
        <Route exact path="/menu" element={<Menu />} />   

      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
