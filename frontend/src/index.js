import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./components/utility/reportWebVitals";
import ErrorMessage from "./components/utility/errorMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";

// controls user state
import {
  UserProvider,
  useUser,
  getUserRole,
} from "./components/utility/userControl";

// the page components
import App from "./App";
import Login from "./components/login/Login";
import Manager from "./components/manager/Manager";
import Cashier from "./components/cashier/Cashier";
import Menu from "./components/menu/Menu";
import AboutUs from "./components/aboutUs/aboutUs";
import ContactUs from "./components/contactUs/contactUs";
import Settings from "./components/settings/Settings";
import Cart from "./components/cart/Cart";
import OrderNow from "./components/orderNow/OrderNow";
import OrderNowSettings from "./components/orderNowSettings/OrderNowSettings";

// import { reducers } from './redux/reducers'
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
// import thunk from "redux-thunk"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "./components/cart/CartContext";
const clientID =
  "646591237506-j4196n8a0k2tqoaaqclv314puj8q6i3n.apps.googleusercontent.com";

function PrivateRoute({ element, requiredRole, fallbackPath }) {
  const { userRole } = useUser();
  console.log("User role:", userRole);
  if (userRole === requiredRole) {
    return element;
  } else {
    return <ErrorMessage userRole={userRole} requiredRole={requiredRole} />;
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
      <Route path="/app" element={<App />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-now" element={<OrderNow />} />
      <Route path="/order-now-settings" element={<OrderNowSettings />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const { userRole } = getUserRole();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <Routing />
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
