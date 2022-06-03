import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function openSubmenu() {
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        isSidebarOpen,
        isSubmenuOpen,
        closeSidebar,
        openSubmenu,
        closeSubmenu
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}

