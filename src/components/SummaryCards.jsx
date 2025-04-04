// src/components/SummaryCards.jsx
import React from 'react';
import './SummaryCards.css';

const cards = [
  { title: 'Available Beds', number: 36, status: 'Stable', color: 'green' },
  { title: 'ICU Beds Occupied', number: 14, status: 'Moderate', color: 'orange' },
  { title: 'Oxygen Level (%)', number: 48, status: 'Critical', color: 'red' },
  { title: 'Staff on Duty', number: 27, status: 'Optimal', color: 'green' },
];

const SummaryCards = () => {
  return (
    <div className="card-row">
      {cards.map((card, index) => (
        <div className="summary-card" key={index}>
          <h3>{card.title}</h3>
          <h1>{card.number}</h1>
          <span className={`badge ${card.color}`}>{card.status}</span>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
