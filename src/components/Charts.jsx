// src/components/Charts.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer, BarChart, Bar
} from 'recharts';
import './Charts.css';

const inflowData = [
  { hour: 'Now', real: 12, forecast: 14 },
  { hour: '+1h', real: 15, forecast: 17 },
  { hour: '+2h', real: 13, forecast: 16 },
  { hour: '+3h', real: 18, forecast: 20 },
  { hour: '+4h', real: 16, forecast: 21 },
  { hour: '+5h', real: 14, forecast: 19 },
  { hour: '+6h', real: 17, forecast: 22 },
];

const bedUsage = [
  { time: '10AM', general: 30, icu: 10 },
  { time: '11AM', general: 32, icu: 12 },
  { time: '12PM', general: 34, icu: 14 },
  { time: '1PM', general: 35, icu: 15 },
  { time: '2PM', general: 33, icu: 14 },
];

const oxygenData = [
  { time: '10AM', level: 90 },
  { time: '11AM', level: 70 },
  { time: '12PM', level: 55 },
  { time: '1PM', level: 40 },
  { time: '2PM', level: 22 },
];

const staffData = [
  { time: '10AM', available: 50 },
  { time: '11AM', available: 48 },
  { time: '12PM', available: 45 },
  { time: '1PM', available: 42 },
  { time: '2PM', available: 40 },
];

const Charts = () => {
  return (
    <div className="chart-section">
      

      <div className="chart-box">
        <h3>Patient Inflow Forecast</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={inflowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="real" stroke="#2d5dcc" />
            <Line type="monotone" dataKey="forecast" stroke="#4e8cff" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Bed Usage Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={bedUsage}>
            <defs>
              <linearGradient id="general" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2d5dcc" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2d5dcc" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="icu" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4e8cff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4e8cff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="general" stroke="#2d5dcc" fillOpacity={1} fill="url(#general)" />
            <Area type="monotone" dataKey="icu" stroke="#4e8cff" fillOpacity={1} fill="url(#icu)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Oxygen Consumption</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={oxygenData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="level" stroke="#dc3545" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Staff Availability</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={staffData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="available" fill="#2d5dcc" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
