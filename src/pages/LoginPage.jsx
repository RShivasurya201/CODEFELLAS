// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adminId, password }),
    });

    const data = await res.json();
     
    if (data.success) {
      localStorage.setItem('token', data.token);
      navigate('/dashboard'); // SPA redirect
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="login-container">
        {/* <h4>id: admin123</h4>
        <h4>password: securepass</h4> */}
      <div className="login-box">
        <h2>Hospital Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Admin ID  //admin123"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password //securepass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
