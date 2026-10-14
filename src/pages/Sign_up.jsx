import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Sign_up.css';

const Sign_up = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registration Success:", { name, email, password });
    navigate('/'); 
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join the world of Aura Mystic</p>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required 
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required 
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required 
            />
          </div>

          <button type="submit" className="signup-submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign_up;