import React, { useEffect, useState } from "react";
import "./index.css";
import { Button, Checkbox, Form, Input } from 'antd';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>

          <Route exact path="/register" element={<Register />}>
          </Route>

          <Route exact path="/login" element={<Register />}>
          </Route>

          {/* <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
