import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
const navigate = useNavigate();
const location = useLocation();
const customerId = new URLSearchParams(location.search).get('customerId');

const handleLoginClick = () => {
    navigate('/login'); 
    }; 

 
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ backgroundColor: '#F0F2EF' }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4" style={{ color: '#750D37' }}>Thank You for Registering</h2>
              <p className="text-center">Your registration was successful!</p>
              <p className="text-center">Your Customer ID is: <strong>{customerId}</strong></p>
              <p className="text-center">An email with your Customer ID has been sent to your registered email address.</p>
              <p className="text-center"><button className="submit" style = {{ margin: '20px 0',
                padding: '10px 20px',
                fontSize: '18px',
                cursor: 'pointer',
                backgroundColor: '#750D37', 
                color: '#F0F2EF', 
                borderRadius: '20px', 
                border: 'none',
                }} onClick={handleLoginClick}>Click here to login</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
