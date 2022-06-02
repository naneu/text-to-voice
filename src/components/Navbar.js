import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Navbar() {

  function handleClick() {
    console.log("i got clicked");
  }
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
          <Link to="/preview">
            <button onClick={handleClick}>Preview</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
