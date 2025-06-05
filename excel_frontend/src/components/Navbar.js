import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Excel Analytics</h2>
      <div className="navbar-links">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;

