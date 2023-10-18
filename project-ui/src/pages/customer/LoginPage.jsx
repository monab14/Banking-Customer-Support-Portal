import React, {useState} from 'react';
import login from "../../images/login.png";
import NavBar from '../../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const imageStyle = {
  width: '50%',
  height: '90vh',
  objectFit: 'cover',
  padding: '20px',
  
};

const containerStyle = {
  width: '50%',
  padding: '120px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F0F2EF',  
};

const innerContainerStyle = {
  width: '100%', 
  padding: '50px',
  borderRadius: '10px',
  backgroundColor: '#FFFFFF', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  width: '100%',
  fontSize: '16px',
  color: '#750D37', 
};

const buttonStyle = {
  margin: '20px 0',
  padding: '10px 20px',
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: '#750D37', 
  color: '#F0F2EF', 
  borderRadius: '20px', 
  border: 'none',
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
    marginRight: '10px',
    color: '#FFFFFF',
};

const logoStyle = {
  position: 'absolute',
  top: '10px', 
  right: '10px', 
};

const LoginPage = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
   username: '',
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
      console.log(response.data); 
      navigate('/customer-dashboard');

    } catch (error) {
      console.error('Error occurred while logging in:', error);
      setError('Invalid username or password. Please try again.');
    }
  };
  return (
    <div><NavBar/>
    <div className="login-page" style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <div className = " mt-5" style={{ ...imageStyle }}>
        <img
          src="https://pbs.twimg.com/media/DlStQXeUUAEhcpC?format=jpg&name=small"
          alt="Bank"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
        <div className="Container" style={{ ...containerStyle }}>
        <div className=" mt-4" style={{ ...logoStyle }}>
          <img
            src="https://bv.world/wp-content/uploads/2023/01/AxisBank-logo.jpg" 
            alt="Logo"
            style={{ width: '180px', height: '50px' }} 
          />
        </div> 
        <div className="inner mt-5 " style={{ ...innerContainerStyle }}>
        <a className="navbar-brand mb-3" href="#">
            <img src={login} alt="Login" width="150px" />
          </a>
        <h2 style={{ color: '#750D37', textAlign: 'left' }}>Customer Login</h2>
        <h6 style = {{ color : '#750D37'}}> Sign in to continue to the website </h6>
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <div className="login-input-container mt-3 mb-3" style={{ ...inputStyle }}>
            <label className= "form-label">Username : </label>
                <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                required
            />
          </div>
          <div className="login-input-container mb-3" style={{ ...inputStyle }}>
            <label className="form-label">Password : </label>
            <input
                type="password"
                id="password"
                className="form-control"
                placeholder= "*********"
                required
            />
        </div>
        <div className="forgot-password mb-3" style={{ textAlign: 'right', width: '100%' }}>
            <a href="#">Forgot Password ?</a>
        </div>
        <div className="mt-3" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button type="submit" style={{ ...buttonStyle }}>
            <span style={iconStyle}>🔒</span> Login
            </button>
        </div>
        </form>
        {error && <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</div>}
        </div>
      </div>
    </div></div>
  );
};

export default LoginPage;
