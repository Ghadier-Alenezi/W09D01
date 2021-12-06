import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
// import Admin from "./components/Admin";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route exact path="/user" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/admin" element={<Admin />} /> */}
      </Routes>
    </>
  );
};

export default App;
