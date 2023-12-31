import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./components/utility/reportWebVitals";
import ErrorMessage from "./components/utility/errorMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";

// controls user state
import {UserProvider, useUser} from "./components/utility/userControl";

// the page components
import App from "./App";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin"
import Manager from "./components/manager/Manager";
import Menu from "./components/menu/menu"
import Cashier from "./components/cashier/Cashier";
import AboutUs from "./components/aboutUs/aboutUs";
import ContactUs from "./components/contactUs/contactUs";
import Settings from "./components/settings/Settings";
import OrderNow from "./components/orderNow/OrderNow";

// import { reducers } from './redux/reducers'
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
// import thunk from "redux-thunk"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "./components/cart/CartContext";
import { SettingsProvider } from "./components/settings/settingsControl";

const clientID =
  "646591237506-j4196n8a0k2tqoaaqclv314puj8q6i3n.apps.googleusercontent.com";

function PrivateRoute({ element, requiredRole }) {
  const { userRole } = useUser();
  console.log("User role:", userRole);
  if (userRole === "manager") {
    return element;
  }
  else if (userRole === requiredRole) {
    return element;
  } else {
    return <ErrorMessage userRole={userRole} requiredRole={requiredRole} />;
  }
}

function Routing() {
  // const [path, setPath] = useState("");

  // useEffect(() => {
  //   const currentPath = window.location.pathname;
  //   if (currentPath === "/") {
  //     document.body.style.zoom = "60%";
  //   } 
  //   else if (currentPath === "/order-now" || currentPath === "/contact-us" || currentPath === "/about-us") {
  //     document.body.style.zoom = "80%";
  //   }
  //   else {
  //     document.body.style.zoom = "100%";
  //   }
  // }, [path]);

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
        path="/admin"
        element={
          <PrivateRoute
            element={<Admin />}
            requiredRole="admin"
          />
        }
      />
      <Route
        path="/manager"
        element={
          <PrivateRoute
            element={<Manager />}
            requiredRole="manager"
          />
        }
      />
      <Route
        path="/cashier"
        element={
          <PrivateRoute
            element={<Cashier />}
            requiredRole="cashier"
          />
        }
      />
      <Route path="/" element={<App />} />
      <Route path="/order-now" element={<OrderNow />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/order-now" element={<OrderNow />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <SettingsProvider>
            <Routing />
          </SettingsProvider>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
