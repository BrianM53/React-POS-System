import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './utility/reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// the page components
import App from './App';
import Login from './components/login/Login'
import Manager from './components/manager/Manager'
import Cashier from './components/cashier/Cashier'
import Customer from './components/customer/Customer'

import { reducers } from './redux/reducers'
import thunk from "redux-thunk"

// create a Routing component to allow
// switching between multiple pages 
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />   
        <Route exact path="/login" element= {
          <GoogleOAuthProvider clientId = "646591237506-j4196n8a0k2tqoaaqclv314puj8q6i3n.apps.googleusercontent.com">
            <Login />
          </GoogleOAuthProvider>
          } 
        />   
        <Route exact path="/manager" element={<Manager />} />   
        <Route exact path="/cashier" element={<Cashier />} />   
        <Route exact path="/customer" element={<Customer />} />   
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
