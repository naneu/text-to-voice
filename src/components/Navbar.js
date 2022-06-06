import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  function displaySubmenu(e) {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  }
  function handleSubmenu(e) {
    if (!e.target.classList.contains("link-li")) {
      closeSubmenu();
    }
  }
  return (
    <nav className="navbar" onMouseOver={handleSubmenu}>
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
          <li onMouseOver={displaySubmenu} className="link-li">
            Explore
          </li>
          <li onMouseOver={displaySubmenu} className="link-li">
            Pricing
          </li>
          <li onMouseOver={displaySubmenu} className="link-li">
            Enterprise
          </li>
        </ul>
        <Link to="/preview">
          <button className="nav-btn">Preview</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
