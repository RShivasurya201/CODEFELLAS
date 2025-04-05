import React, { useEffect, useState } from 'react';
import './Wards.css';

const Wards = () => {
  const [wards, setWards] = useState([]);
  const [formWard, setFormWard] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [severity, setSeverity] = useState('');

  const fetchWards = async () => {
    const res = await fetch('http://localhost:5000/api/wards'
      
    );
    const data = await res.json();
    setWards(data);
  };

  useEffect(() => {
    fetchWards();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!patientName || !severity) return;

    const res = await fetch('/api/add-patient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: patientName, severity }),
    });

    const result = await res.json();
    alert(result.message);
    setPatientName('');
    setSeverity('');
    setFormWard(null);
    fetchWards(); // Refresh bed data
  };

  return (
    <div className="wards-container">
      <h2>Ward Management</h2>

      <div className="wards-grid">
        {wards.map((ward) => (
          <div className="ward-card" key={ward._id}>
            <h3>{ward.name}</h3>

            <div className="bed-grid">
              {ward.beds.map((bed, idx) => (
                <div
                  key={idx}
                  className={`bed-icon ${bed.occupied ? 'occupied' : 'free'}`}
                />
              ))}
            </div>

            <p>{ward.patients.length} patients</p>
            <button onClick={() => setFormWard(ward.name)}>Add Patient</button>

            {formWard === ward.name && (
              <form className="patient-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                >
                  <option value="">Select Severity</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wards;
