import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { links } from "./Sidebar";

function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { link, sublinks },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState(2)
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if(sublinks.length === 3){
      setColumns('col-3')
    }
    if(sublinks.length > 3){
      setColumns('col-4')
    }
  }, [location, sublinks]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"} `}
      ref={container}
    >
    <h4>{link}</h4>
    <div className={`submenu-center ${columns}`}>
      {sublinks.map((sublink, index)=>{
        const {label, icon} = sublink
        return <a href="" key={index}>{icon} {label}</a>
      })}
    </div>

    </aside>
  );
}

export default Submenu;
