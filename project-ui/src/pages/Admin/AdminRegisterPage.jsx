import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import registrationImage from '../../images/registrationImage.jpeg';
import smallImage from '../../images/smallImage.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const containerStyle = {
  width: '120%',
  padding: '60px',
  borderRadius: '10px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center'
};

const inputStyle = {
  width: '100%',
  maxWidth: '300px',
  margin: '10px 0',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  maxWidth: '320px',
  padding: '10px',
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: '#750D37',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
};

const AdminRegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8090/admins/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        toast.success('Admin registered successfully!');
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
        toast.error('Admin registration failed. Please try again.');
      });
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center mt-5 mb-4">
              <img src={registrationImage} alt="Registration" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div style={containerStyle}>
              <div className="text-center mb-4">
                <h2 className="mt-3">Admin Registration</h2>
                <img src={smallImage} alt="Small" className="img-fluid" />
                
              </div>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleFormChange}
                  style={inputStyle}
                  required
                />
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleFormChange}
                  style={inputStyle}
                  required
                />
                <button type="submit" className="btn btn-primary" style={buttonStyle}>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminRegisterPage;
