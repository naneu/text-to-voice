import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>Explore</li>
          <li>Pricing</li>
          <li>Enterprise</li>
          <button>Preview</button>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
