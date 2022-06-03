import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Navbar() {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  function handleClick() {
    console.log("i got clicked");
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>Explore</li>
          <li>Pricing</li>
          <li>Enterprise</li>
        </ul>
        <Link to="/preview">
          <button onClick={handleClick} className="nav-btn">
            Preview
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
