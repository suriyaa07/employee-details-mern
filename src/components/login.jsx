import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define inline style for body background image
  document.body.style.backgroundImage = "url('https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg')";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform login logic here (axios.post, etc.)
      alert('Login successful');
      navigate('/'); // Redirect to the home page
    } catch (err) {
      console.log(err);
      alert('Error logging in: ' + err);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
            <div className="label-float">
              <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='' />
              <label htmlFor='username'>Username</label>
            </div>

            <div className="label-float">
              <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='' />
              <label htmlFor='password'>Password</label>
            </div>

            <div className='justify-center'>
              <button type="submit">Login</button>
            </div>
          </form>

          <div>
            <hr />
          </div>

          <p>If you don't have an account? <a href="#" onClick={handleSignup}>Signup</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
