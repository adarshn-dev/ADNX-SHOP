// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // New state for error message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored email and password from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Check if entered credentials match stored ones
    if (email === storedEmail && password === storedPassword) {
      console.log('Login successful:', { email, password });
      navigate('/dashboard'); // Redirect to dashboard on success
    } else {
      setError('Invalid email or password'); // Show error if credentials don’t match
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back to ADNX</h2>
        <p className="login-subtitle">Log in to explore the latest dress collections</p>
        {error && <p className="error-message">{error}</p>} {/* Display error if any */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <p className="signup-prompt">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;