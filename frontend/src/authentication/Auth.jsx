import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./SignUp";
import Login from "./Login";
import "./Login.css";
function Auth() {
  return (
      <div className="login">
        <nav>
          <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default Auth;
