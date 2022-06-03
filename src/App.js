import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from "./pages/Preview";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <Submenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
