import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Sign_in.css';

const Sign_in = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login Success:", { email, password });

    navigate('/'); 
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Sign In</h2>
        <p className="signin-subtitle">Welcome back to Aura Mystic</p>
        
        <form onSubmit={handleSubmit} className="signin-form">
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
              placeholder="Enter your password"
              required 
            />
          </div>

          <button type="submit" className="signin-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;