import React from "react";
import "./App.css";
import ProductDetails from "./Pages/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Home/Navbar";
import Signin from "./Pages/Signin";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import AdminLogin from "./Pages/AdminLogin";
import Profile from "./Components/Home/Profile";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
