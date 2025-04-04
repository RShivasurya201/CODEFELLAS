// src/components/Recommendations.jsx
import React from 'react';
import './Recommendations.css';

const recommendations = [
  { message: "Redirect non-critical patients to nearby facilities due to high ICU usage.", priority: "high" },
  { message: "Prepare for potential patient surge in 2 hours based on forecast data.", priority: "medium" },
  { message: "Oxygen levels critically low; initiate refill protocols.", priority: "high" },
  { message: "Reallocate available staff to ICU as severity is increasing.", priority: "medium" },
  { message: "Staff allocation is currently optimal.", priority: "low" }
];

const Recommendations = () => {
  return (
    <div className="recommendation-section">
      
      <div className="recommendation-cards">
        {recommendations.map((rec, index) => (
          <div key={index} className={`recommendation-card ${rec.priority}`}>
            <span className="priority-label">{rec.priority.toUpperCase()} PRIORITY</span>
            <p>{rec.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
