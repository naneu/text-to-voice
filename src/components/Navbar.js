import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  function displaySubmenu(e) {
    openSubmenu();
  }
  // function closeSubmenu(e) {
  //   closeSubmenu();
  // }
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
          <li onMouseOver={displaySubmenu}>Explore</li>
          <li onMouseOver={displaySubmenu}>Pricing</li>
          <li onMouseOver={displaySubmenu}>Enterprise</li>
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
