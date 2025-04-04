import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import SummaryCards from '../components/SummaryCards';
import Charts from '../components/Charts';
import Recommendations from '../components/Recommendations';
import PatientTable from '../components/PatientTable';

const Dashboard = () => {
  const homeRef = useRef(null);
  const monitorRef = useRef(null);
  const recRef = useRef(null);
  const patientRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#f0f6ff', minHeight: '100vh' }}>
      <Navbar
        scrollToHome={() => scrollTo(homeRef)}
        scrollToMonitor={() => scrollTo(monitorRef)}
        scrollToRecommendations={() => scrollTo(recRef)}
        scrollToPatients={() => scrollTo(patientRef)}
      />
      <div className="container">
        <div className="section-heading" ref={homeRef}>
          <h2>Current Status</h2>
        </div>
        <SummaryCards />

        <div className="section-heading" ref={monitorRef}>
          <h2>Live Monitor</h2>
        </div>
        <Charts />

        <div className="section-heading" ref={recRef}>
          <h2>AI Powered Recommendations</h2>
        </div>
        <Recommendations />

        <div className="section-heading" ref={patientRef}>
          <h2>Patient Records</h2>
        </div>
        <PatientTable />
      </div>
    </div>
  );
};

export default Dashboard;
