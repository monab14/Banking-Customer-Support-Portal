import React, { useState } from 'react';
import login from "../../images/login.png";
import NavBar from '../../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const parentContainerStyle = {
  display: 'flex',
  width: '100vw',
  height: '100vh',
};

const imageContainerStyle = {
  flex: '1',
  display: 'flex',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '40px',
  borderRadius: '10px',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const formContainerStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  flexDirection: 'column',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '70px',
  borderRadius: '10px',
  backgroundColor: '#FFFFFF',
   
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8090/api/welcome', formData);
      if (response.status === 200)
      {
        localStorage.setItem("loggedIn", true);
       }
      navigate('/customer-dashboard');
    } catch (error) {
      console.error('Error occurred while logging in:', error);
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-page" style={parentContainerStyle}>
        <div className="image-container" style={imageContainerStyle}>
          <img
            src="https://pbs.twimg.com/media/DlStQXeUUAEhcpC?format=jpg&name=small"
            alt="Bank"
            style={imageStyle}
          />
        </div>
        <div className="form-container" style={formContainerStyle}>
          {error && <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</div>}
          <div className="mt-4" style={{ ...formContainerStyle }}>
            <img src={login} alt="Login" width="150px" />
            <h2 style={{ color: '#871f40', textAlign: 'left' }}>Customer Login</h2>
            <h6 style={{ color: '#871f40' }}>Sign in to continue to the website</h6>
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>
              <div className="login-input-container mt-3 mb-3">
                <label className="form-label">Username:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="login-input-container mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="*********"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="forgot-password mb-3" style={{ textAlign: 'right', width: '100%' }}>
                <Link to="#">Forgot Password?</Link>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <button type="submit" style={{ margin: '20px 0', padding: '10px 20px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#871f40', color: '#F0F2EF', borderRadius: '20px', border: 'none' }}>
                  <span style={{ marginRight: '10px', color: '#FFFFFF' }}>🔒</span> Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
