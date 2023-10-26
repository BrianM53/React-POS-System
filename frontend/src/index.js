import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './components/utility/reportWebVitals';

// controls user state
import { UserProvider, useUser, getUserRole } from './components/utility/userControl'

// the page components
import App from './App';
import Login from './components/login/Login'
import Manager from './components/manager/Manager'
import Cashier from './components/cashier/Cashier'
import Customer from './components/customer/Customer'

// import { reducers } from './redux/reducers'
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
// import thunk from "redux-thunk"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google'
const clientID = "646591237506-j4196n8a0k2tqoaaqclv314puj8q6i3n.apps.googleusercontent.com";

function PrivateRoute({ element, requiredRole, fallbackPath }) {
  const { userRole } = useUser();
  console.log("User role:", userRole);
  if (userRole === requiredRole) {
    return element;
  } else {
    return <Navigate to={fallbackPath} />;
  }
}

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/login"
        element={
          <GoogleOAuthProvider clientId={clientID}>
            <Login />
          </GoogleOAuthProvider>
        }
      />
      <Route
        path="/manager"
        element={
          <PrivateRoute
            element={<Manager />}
            requiredRole="manager"
            fallbackPath="/"
          />
        }
      />
      <Route
        path="/cashier"
        element={
          <PrivateRoute
            element={<Cashier />}
            requiredRole="cashier"
            fallbackPath="/"
          />
        }
      />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const { userRole } = getUserRole();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routing />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
