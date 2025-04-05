// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = ({ scrollToHome, scrollToMonitor, scrollToRecommendations, scrollToPatients }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>HospAI</h1>
      </div>
      <div className="nav-right">
        <a onClick={scrollToHome}>Home</a>
        <a onClick={scrollToMonitor}>Live Monitor</a>
        <a onClick={scrollToRecommendations}>Simulation</a>
        <a onClick={scrollToPatients}>Reports</a>
        <Link to="/wards">Wards</Link>
      </div>
    </nav>
  );
};

export default Navbar;
