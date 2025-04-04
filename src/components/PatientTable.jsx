// src/components/PatientTable.jsx
import React from 'react';
import './PatientTable.css';

const patientData = [
  { id: 'P001', arrival: '10:00 AM', severity: 'High', bed: 'ICU-4', status: 'Under Treatment' },
  { id: 'P002', arrival: '10:30 AM', severity: 'Moderate', bed: 'G-12', status: 'Stable' },
  { id: 'P003', arrival: '11:00 AM', severity: 'Low', bed: 'G-15', status: 'Observation' },
  { id: 'P004', arrival: '11:15 AM', severity: 'High', bed: 'ICU-3', status: 'Critical' },
];

const PatientTable = () => {
  return (
    <div className="patient-table-section">
      <h2>Patient Records</h2>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Arrival Time</th>
            <th>Severity</th>
            <th>Assigned Bed</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient, index) => (
            <tr key={index}>
              <td>{patient.id}</td>
              <td>{patient.arrival}</td>
              <td>{patient.severity}</td>
              <td>{patient.bed}</td>
              <td>{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
