import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  FaLock } from 'react-icons/fa'; // Importing icons
import { GiPoliceBadge } from "react-icons/gi";
import './Login.css'; // Assuming you have a CSS file for styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/home'); // Redirect to home page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="Logo" className="logo"></img>
      <h1>IDENTIFEYE</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <GiPoliceBadge className="icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
