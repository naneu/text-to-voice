import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        isSidebarOpen,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext(){
    return useContext(AppContext)
}

