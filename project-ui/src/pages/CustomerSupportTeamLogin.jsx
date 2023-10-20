
import NavBar from '../components/NavBar';
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';


const CustomerSupportTeamLogin = () => {

  const [teamDetails, setTeamDetails] = useState({
    teamName: '', // Add teamName state
    password: '', // Add password state
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API
      const response = await axios.post('http://localhost:8090/teams/create', teamDetails);

      if (response.status === 200) {
        // Handle success (optional)
        console.log('Team created successfully:', response.data);
        window.location.href = "/supportTeam";
      }
    } catch (error) {
      // Handle errors (optional)
      console.error('Error creating team:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamDetails({ ...teamDetails, [name]: value });
  };
  const imageStyle = {
    width: '50%',
    height: '100vh',
    objectFit: 'cover',
    padding: '30px',
    backgroundColor: '#FFFFFF',
  };

  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F2EF',
    padding: '20px',
    position: 'relative',
  };
  const outerContainerStyle = {
    width: '43%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };
  const innerContainerStyle = {
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
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    fontSize: '16px',
    color: '#871f40',
  };

  const buttonStyle = {
    margin: '20px 0',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#871f40',
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
    top: '1px',
    left: '2px',
  };
  return (
    <div style={{ width: '100%' }}>
      <NavBar />
      <div className="admin-login-page" style={{ display: 'flex', width: '100vw', height: '100vh' }}>

        <div className="Container" style={{ ...containerStyle }}>
          <div className="mt-3" style={{ ...outerContainerStyle }}>

            <div className='mt-3'>
              <div className="mt-5" style={innerContainerStyle}>
                <a className="navbar-brand mb-3" href="#">
                  {/* <img src='' alt="AdminLogin" width="150px" /> */}
                </a>
                <h2 style={{ color: '#871f40' }}>Support Team Login</h2>
                <h6 style={{ color: '#871f40' }}>Sign in to access the support panel</h6>
                <form style={{ width: '100%', textAlign: 'center' }} onSubmit={handleFormSubmit}>
                  <div className="login-input-container mt-3" style={{ ...inputStyle }}>
                    <label className="form-label">Team Name :</label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      className="form-control"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="login-input-container mb-3" style={{ ...inputStyle }}>
                    <label className="form-label">Password :</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="*********"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="forgot-password mb-3" style={{ textAlign: 'right', width: '100%' }}>
                    <Link to="#">Forgot Password ?</Link>
                  </div>
                  <div className="mt-3" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <button type="submit" style={{ ...buttonStyle }}>
                      <span style={iconStyle}>🔒</span> Login
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
          <div style={{ ...imageStyle }}>
            <img
              src="https://etimg.etb2bimg.com/photo/66990128.cms"
              alt="Bank"
              style={{ width: '90%', height: '90%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div></div>
  );
};

export default CustomerSupportTeamLogin;

