import React from 'react';
import NavBar from '../../components/NavBar';

const ComplaintPage = () => {
  const formStyle = {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const buttonStyle = {
    display: 'block',
    margin: '30px auto',
    
  };

  return (
    <div>
    <NavBar/>
    <div className="container">
     
      <img src='MonaImages/cst.png' alt="Customer Support" width='1100px' style={{ padding: '70px' }} />
      <form style={{ padding: '0px 70px' }}>
        <div className="mb-3">
          <h1>I have a complaint regarding </h1>
          <div className="form-floating mb-3">
            <select className="form-select" id="complaintType">
              <option value="product">Product</option>
              <option value="service">Service</option>
              <option value="experience">Experience</option>
            </select>
            <label htmlFor="complaintType">Select Complaint Type</label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px', padding: '0px 70px' }}></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <button type="button" className="btn btn-outline-primary" style={buttonStyle}>Submit</button>
        </div>
        <img src='MonaImages/complaint.png' width='980px'></img>
      </form>
    </div></div>
  );
}

export default ComplaintPage;
