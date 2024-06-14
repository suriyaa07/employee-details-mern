import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform sign-up logic here (axios.post, etc.)
      alert('Sign up successful');
      navigate('/login'); // Redirect to the login page
    } catch (err) {
      console.log(err);
      alert('Error signing up: ' + err);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(90deg, #FB37FF, #18B2DE)'
    }}>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <div className="input">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="light">Sign Up</button>
          <p> Already have an account? <a href="#" onClick={() => navigate('/login')}>Login</a> </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
