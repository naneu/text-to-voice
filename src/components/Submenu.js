import React from 'react'
import { useGlobalContext } from "../context";

function Submenu() {
    const { isSubmenuOpen} = useGlobalContext();
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'} `}>
        submenu
    </aside>
  )
}

export default Submenu