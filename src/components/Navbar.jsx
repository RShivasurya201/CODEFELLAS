// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

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
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
