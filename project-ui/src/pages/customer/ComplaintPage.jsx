import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import NavBar from '../../components/NavBar';

const ComplaintPage = () => {
const location = useLocation();
const customerId = new URLSearchParams(location.search).get("customerId");
  const [complaintCategories, setComplaintCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    getComplaintCategories();
  }, []);

  const getComplaintCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8090/complaints/all");
      setComplaintCategories(response.data);
    } catch (error) {
      console.error('Error fetching complaint categories:', error);
    }
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const formStyle = {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0px 70px'
  };

  const buttonStyle = {
    display: 'block',
    margin: '30px auto',
  };

  const pageStyle = {
    background: '#f0f2ef',
  };

  const headingStyle = {
    fontFamily: 'Arial, sans-serif', 
    color: '#871f40',
  };

  return (
    <div style={pageStyle}>
      <NavBar />
      <div className="container">
        <img src='MonaImages/cst.png' alt="Customer Support" width='1100px' style={{ padding: '70px' }} />
        <form style={{ padding: '0px 70px' }}>
          <div className="mb-3">
            <h1 style={headingStyle}>I have a complaint regarding </h1>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="complaintType"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select Complaint Category</option>
                {complaintCategories.map(category => (
                  <option key={category.id} value={category.id}>{category.category}</option>
                ))}
              </select>
              <label htmlFor="complaintType">Select Complaint </label>
            </div>
            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ minHeight:'200px', maxHeight:'200px' ,height: '200px' }}></textarea>
              <label for="floatingTextarea2">Complaint Description</label>
            </div>
            <button type="button" className="btn btn-outline-primary" style={buttonStyle}>Submit</button>
          </div>
          <img src='MonaImages/complaint.png' width='980px' alt="Complaint"></img>
        </form>
      </div>
    </div>
  );
}

export default ComplaintPage;
