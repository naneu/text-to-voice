import React from "react";
import { useGlobalContext } from "../context";
import { FaBook, FaBriefcase, FaCreditCard, FaTimes } from "react-icons/fa";

export const links = [
  {
    link: "Explore",
    sublinks: [
      { label: "test", icon: <FaCreditCard /> },
      { label: "read", icon: <FaCreditCard /> },
      { label: "libraries", icon: <FaCreditCard /> },
    ],
  },
  {
    link: "Pricing",
    sublinks: [
      { label: "billing", icon: <FaCreditCard /> },
      { label: "plugins", icon: <FaBriefcase/> },
      { label: "about", icon: <FaCreditCard /> },
      { label: "payment", icon: <FaBriefcase /> },
    ],
  },
  {
    link: "Enterprise",
    sublinks: [
      { label: "customers", icon: <FaBook /> },
      { label: "help", icon: <FaCreditCard /> },
    ],
  },
];
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {links.map((item, index) => {
            const { link, sublinks } = item;
            return (
              <article key={index}>
                <h4>{link}</h4>
                <div className="sidebar-sublinks">
                  {sublinks.map((sublink, index) => {
                    const { label, icon } = sublink;
                    return (
                      <a href="" key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
