// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Store email and password in localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password); // WARNING: Not secure in production!

    // Placeholder signup logic (e.g., API call could go here)
    console.log('Sign Up submitted:', { name, email, password });
    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000); // Redirect to login after 2 seconds
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Join ADNX</h2>
        <p className="signup-subtitle">Create an account to start shopping</p>
        {success ? (
          <p className="success-message">Account created successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
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
                placeholder="Create a password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        )}
        <p className="login-prompt">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;